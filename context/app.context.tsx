import { createContext, PropsWithChildren, useState } from "react";
import { MenuItem } from "../interfaces/menu.interfaces";
import { TopPageCategory } from "../interfaces/top-page.interface";

export interface IAppContext {
    menu: MenuItem[];
    firstCategory: TopPageCategory;
    setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>(
    { menu: [], firstCategory: TopPageCategory.Courses }
);

export function AppContextProvider({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element {
    // для смены вкладки у меню
    const [menuState, setMenuState] = useState<MenuItem[]>(menu);

    function setMenu(newMenu: MenuItem[]) {
        setMenuState(newMenu);
    }

    return <AppContext.Provider
        value={{ menu: menuState, firstCategory: firstCategory, setMenu }}>
        {children}
    </AppContext.Provider>;
}