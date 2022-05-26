import { useContext } from "react";
import { AppContext } from "../../context/app.context";
import { FirstLevelMenuItem, PageItem } from "../../interfaces/menu.interfaces";
import classnames from "classnames";
import styles from './Menu.module.scss';
import Link from "next/link";
import { useRouter } from "next/router";
import { firstLevelMenu } from "../../helpers/first-level-menu";

const Menu = () => {
    const { menu, firstCategory, setMenu } = useContext(AppContext);
    const router = useRouter();

    function openSecondLevel(secondCategory: string) {
        setMenu && setMenu(menu.map(menuItem => {
            if (menuItem._id.secondCategory === secondCategory) {
                menuItem.isOpened = !menuItem.isOpened;
            }
            return menuItem;
        }));
    }

    function buildFirstLevel() {
        return (
            <>
                {firstLevelMenu.map(firstMenuItem => (
                    <div key={firstMenuItem.route}>
                        <Link href={`/${firstMenuItem.route}`}>
                            <a>
                                <div className={classnames(styles.firstLevel, {
                                    [styles.firstLevelActive]: firstMenuItem.id === firstCategory
                                })}>
                                    {firstMenuItem.icon}
                                    <span>{firstMenuItem.name}</span>
                                </div>
                            </a>
                        </Link>
                        {firstMenuItem.id === firstCategory && buildSecondLevel(firstMenuItem)}
                    </div>
                ))}
            </>
        );
    }

    function buildSecondLevel(firstMenuItem: FirstLevelMenuItem) {
        return (
            <div className={styles.secondBlock}>
                {menu.map(menuItem => {
                    if (menuItem.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
                        menuItem.isOpened = true;
                    }
                    return (
                        <div key={menuItem._id.secondCategory}>
                            <div
                                className={styles.secondLevel}
                                onClick={() => openSecondLevel(menuItem._id.secondCategory)}>
                                {menuItem._id.secondCategory}
                            </div>
                            <div className={classnames(styles.secondLevelBlock, {
                                [styles.secondLevelBlockOpened]: menuItem.isOpened
                            })}>
                                {buildThirdLevel(menuItem.pages, firstMenuItem.route)}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    function buildThirdLevel(pages: PageItem[], route: string) {
        return (
            pages.map(page => (
                <Link href={`/${route}/${page.alias}`} key={page.alias}>
                    <a className={classnames(styles.thirdLevel, {
                        [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath
                    })}>
                        {page.category}
                    </a>
                </Link>
            ))
        );
    }

    return (
        <div>
            <ul>
                {buildFirstLevel()}
            </ul>
        </div>
    );
};

export default Menu;