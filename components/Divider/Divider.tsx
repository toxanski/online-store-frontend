import { DividerProps } from "./Divider.props";
import styles from './Divider.module.scss';
import classnames from "classnames";

const Divider = ({ children, className }: DividerProps): JSX.Element => {
    return <hr className={classnames(className, styles.hr)} />;
};

export { Divider };