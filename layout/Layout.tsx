import React, { FunctionComponent } from 'react';
import { LayoutProps } from "./Layout.props";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import styles from './Layout.module.scss';
import { AppContextProvider, IAppContext } from "../context/app.context";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <main className={styles.main}>{children}</main>
            <Footer className={styles.footer}/>
        </div>
    );
};
// Record<string, unknown> & IAppContext для доступа к firstCategory и menu из пропсов
export default function withLayout<T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider firstCategory={props.firstCategory} menu={props.menu}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        );
    };
}