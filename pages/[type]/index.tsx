import withLayout from "../../layout/Layout";
import { MenuItem } from "../../interfaces/menu.interfaces";
import { TopPageModel } from "../../interfaces/top-page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import axios from "axios";
import { firstLevelMenu } from "../../helpers/first-level-menu";
import { ParsedUrlQuery } from "node:querystring";

const Type: NextPage<TypeProps> = ({ menu, page, products, firstCategory }: TypeProps) => {
    return (
        <>
            123
        </>
    );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async function () {
    return {
        paths: firstLevelMenu.map(menu => `/${menu.route}`),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async function ({ params }: GetStaticPropsContext<ParsedUrlQuery>) {
    if (!params) {
        return {
            notFound: true
        };
    }

    const currentFirstCategory = firstLevelMenu.find(menu => menu.route === params.type);

    if (!currentFirstCategory) return { notFound: true };

    console.log(currentFirstCategory.id);

    const { data: menu } = await axios.post(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
        { firstCategory: currentFirstCategory.id }
    );

    return {
        props: { menu, firstCategory: currentFirstCategory.id }
    };
};

export interface TypeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}