import { FirstLevelMenuItem } from "../interfaces/menu.interfaces";
import CoursesIcon from "./icons/course.svg";
import { TopPageCategory } from "../interfaces/top-page.interface";
import ServicesIcon from "./icons/service.svg";
import BooksIcon from "./icons/book.svg";
import ProductsIcon from "./icons/good.svg";

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopPageCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopPageCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopPageCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopPageCategory.Products }
];