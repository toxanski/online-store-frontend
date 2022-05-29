import { SidebarProps } from "./Sidebar.props";
import FirstLevelMenu from "../Menu/menu";
import Logo from '../logo.svg';
import styles from './Sidebar.module.scss';
import classnames from "classnames";
import { Search } from "../../components";

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <aside className={classnames(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo} />
            <Search/>
            <FirstLevelMenu/>
        </aside>
    );
};

export default Sidebar;