import withLayout from "../../layout/Layout";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interfaces";
import { TopPageCategory, TopPageModel } from "../../interfaces/top-page.interface";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "node:querystring";
import { ProductModel } from "../../interfaces/product.interface";
import { firstLevelMenu } from "../../helpers/first-level-menu";
import { TopPageComponent } from "../../page-components";
import { API } from '../../helpers/api';

const Course: NextPage<CourseProps> = ({ menu, page, products, firstCategory }: CourseProps) => {
    return (
        <>
            <TopPageComponent
                page={page}
                firstCategory={firstCategory}
                products={products}
            />
        </>
    );
};

export default withLayout(Course);

// [type] чтобы в /courses/, /services/... не повторятся
export const getStaticPaths: GetStaticPaths = async () => {
    // пререндер страниц по меню первого уровня
    let paths: string[] = [];

    // firstMenuItem из хелпера
    for (const firstMenuItem of firstLevelMenu) {
        const { data: menu } = await axios.post<MenuItem[]>(
            API.topPage.find,
            { firstCategory: firstMenuItem.id }
        );
        paths = paths.concat(menu.flatMap(item =>
            item.pages.map(page => `/${firstMenuItem.route}/${page.alias}`))
        );
    }
    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) return { notFound: true };

    const currentFirstCategory = firstLevelMenu.find(menu =>
        menu.route === params.type
    );

    if (!currentFirstCategory) return { notFound: true };

    try {
        const { data: menu } = await axios.post<MenuItem[]>(
            API.topPage.find,
            { firstCategory: currentFirstCategory.id }
        );

        if (!menu.length) return { notFound: true };

        // страница по alias
        // params.alias т.к. страница сама [alias].tsx
        const reqAlias = params.alias;
        const { data: page } = await axios.get<TopPageModel>(
            `${API.topPage.byAlias}/${reqAlias}`
        );

        const { data: products } = await axios.post<ProductModel[]>(
            API.product.find,
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
                firstCategory: currentFirstCategory.id
            }
        };
    } catch {
        return {
            notFound: true
        };
    }
};

export interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    page: TopPageModel;
    products: ProductModel[];
    firstCategory: TopPageCategory;
}