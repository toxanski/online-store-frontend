import { TopPageCategory, TopPageModel } from "../../interfaces/top-page.interface";
import { ProductModel } from "../../interfaces/product.interface";

export interface TopPageProps {
    page: TopPageModel;
    products: ProductModel[];
    firstCategory: TopPageCategory;
}