import { SidebarProps } from "./Sidebar.props";

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
    return (
        <aside {...props}>
            Sidebar
        </aside>
    );
};

export default Sidebar;