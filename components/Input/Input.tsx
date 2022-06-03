import { InputProps } from "./Input.props";
import classnames from "classnames";
import styles from './Input.module.scss';
import { ForwardedRef, forwardRef } from "react";

const Input = forwardRef((
    { className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
    return <input className={classnames(styles.input, className)} ref={ref} {...props}/>;
});

export { Input };