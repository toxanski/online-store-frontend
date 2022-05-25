import withLayout from "../../layout/Layout";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interfaces";
import { TopPageModel } from "../../interfaces/top-page.interface";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { ProductModel } from "../../interfaces/product.interface";

const Course: NextPage<CourseProps> = ({ menu, page, products, firstCategory }: CourseProps) => {
    return (
        <>
            {products && products.length}
        </>
    );
};

export default withLayout(Course);

const FIRST_CATEGORY = 0;
export const getStaticPaths: GetStaticPaths = async () => {
    // все пути уже лежат в меню, остается их вытащить и загенерить страницы
    const { data: menu } = await axios.post<MenuItem[]>(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
        { firstCategory: FIRST_CATEGORY }
    );

    return {
        paths: menu.flatMap(item => item.pages.map(page => `/courses/${page.alias}`)),
        fallback: true
    };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }

    const { data: menu } = await axios.post<MenuItem[]>(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`,
        { firstCategory: FIRST_CATEGORY }
    );

    // страница по alias
    // params.alias т.к. страница сама [alias].tsx
    const reqAlias = params.alias;
    const { data: page } = await axios.get<TopPageModel>(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/byAlias/${reqAlias}`
    );

    const { data: products } = await axios.post<ProductModel[]>(
        `${process.env.NEXT_PUBLIC_DOMAIN}/api/product/find`,
        {
            category: page.category,
            limit: 10
        }
    );

    return {
        props: {
            menu,
            page,
            products,
            firstCategory: FIRST_CATEGORY
        }
    };
};

export interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    page: TopPageModel;
    products: ProductModel[];
    firstCategory: number;
}