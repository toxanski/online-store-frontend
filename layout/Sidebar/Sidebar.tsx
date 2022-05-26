import { SidebarProps } from "./Sidebar.props";
import FirstLevelMenu from "../Menu/menu";

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <aside {...props}>
            <FirstLevelMenu/>
        </aside>
    );
};

export default Sidebar;