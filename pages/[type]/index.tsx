import withLayout from "../../layout/Layout";
import { MenuItem } from "../../interfaces/menu.interfaces";
import { TopPageModel } from "../../interfaces/top-page.interface";
import { ProductModel } from "../../interfaces/product.interface";
import { NextPage } from "next";

const Course: NextPage<CourseProps> = ({ menu, page, products, firstCategory }: CourseProps) => {
    return (
        <>
            123
        </>
    );
};

export default withLayout(Course);

export interface CourseProps extends Record<string, unknown> {

}