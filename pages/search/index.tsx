import withLayout from "../../layout/Layout";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { Button, Rating, Tag, Text, TitleTag } from "../../components";
import axios from "axios";
import { MenuItem } from "../../interfaces/menu.interfaces";

const Search: NextPage<SearchProps> = ({ param }: SearchProps): JSX.Element => {
    return (
        <>
            Search
        </>
    );
};

// export default withLayout(Search);

export interface SearchProps extends Record<string, unknown> {
    param: string
}


