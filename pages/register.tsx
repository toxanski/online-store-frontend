import withLayout from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interfaces";
import { GetStaticProps } from "next";
import { API } from "../helpers/api";
import { Input } from "../components";
import { Register } from "../page-components";

const Search = () => {
    return (
        <div style={{ display: 'flex', justifyItems: 'center', alignItems: 'center' }}>
            <Register />
        </div>
    );
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async function () {
    const firstCategory = 0;
    const reqUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`;
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
}

interface SearchProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}
