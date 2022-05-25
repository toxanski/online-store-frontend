import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interfaces";
import { TopPageCategory } from "../../interfaces/top-page.interface";
import CoursesIcon from './icons/course.svg';
import ProductsIcon from './icons/good.svg';
import BooksIcon from './icons/book.svg';
import ServicesIcon from './icons/service.svg';
import classnames from "classnames";
import styles from './Menu.module.scss';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <CoursesIcon/>, id: TopPageCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopPageCategory.Services },
    { route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopPageCategory.Books },
    { route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopPageCategory.Products }
];

const Menu = () => {
    const { menu, firstCategory, setMenu } = useContext(AppContext);

    function buildFirstLevel() {
        return (
            <>
                {firstLevelMenu.map(firstMenuItem => (
                    <div key={firstMenuItem.route}>
                        <a href={`/${firstMenuItem.route}`}>
                            <div className={classnames(styles.firstLevel, {
                                [styles.firstLevelActive]: firstMenuItem.id === firstCategory
                            })}>
                                {firstMenuItem.icon}
                                <span>{firstMenuItem.name}</span>
                            </div>
                        </a>
                        {firstMenuItem.id === firstCategory && buildSecondLevel(firstMenuItem)}
                    </div>
                ))}
            </>
        );
    }

    function buildSecondLevel(firstMenuItem: FirstLevelMenuItem) {
        return (
            <>
                {menu.map(menuItem => (
                    <div key={menuItem._id.secondCategory}>
                        <div className={styles.secondLevel}>{menuItem._id.secondCategory}</div>
                        <div className={classnames(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: menuItem.isOpened
                        })}>
                            {buildThirdLevel(menuItem.pages, firstMenuItem.route)}
                        </div>
                    </div>
                ))}
            </>
        );
    }
    function buildThirdLevel(pages: PageItem[], route: string) {
        return (
            pages.map(page => (
                <a
                    href={`/${route}/${page.alias}`}
                    className={classnames(styles.thirdLevel, {
                        [styles.thirdLevelActive]: true
                    })}>
                    {/*TODO: на бэке добавить category в ответ*/}
                    {page.category}
                </a>
            ))
        );
    }

    return (
        <div>
            <ul>
                { buildFirstLevel() }
            </ul>
        </div>
    );
};

export default Menu;