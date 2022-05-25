import { SidebarProps } from "./Sidebar.props";
import Menu from "../Menu/Menu";

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <aside {...props}>
            <Menu/>
        </aside>
    );
};

export default Sidebar;