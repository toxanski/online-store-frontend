import { SidebarProps } from "./Sidebar.props";
import FirstLevelMenu from "../Menu/menu";
import Logo from '../logo.svg';
import styles from './Sidebar.module.scss';
import classnames from "classnames";

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
    return (
        <aside className={classnames(className, styles.sidebar)} {...props}>
            <Logo className={styles.logo} />
            <div>SEARCH</div>
            <FirstLevelMenu/>
        </aside>
    );
};

export default Sidebar;