import { InputProps } from "./Input.props";
import classnames from "classnames";
import styles from './Input.module.scss';

const Input = ({ className, ...props }: InputProps): JSX.Element => {
    return <input className={classnames(styles.input, className)} {...props}/>;
};

export { Input };