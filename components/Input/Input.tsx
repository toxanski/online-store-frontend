import { InputProps } from "./Input.props";
import classnames from "classnames";
import styles from './Input.module.scss';
import { ForwardedRef, forwardRef } from "react";

const Input = forwardRef((
    { error, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
): JSX.Element => {
    return (
        <div className={classnames(styles.inputWrapper, className)}>
            <input className={classnames(styles.input, {
                [styles.error]: error
            })} ref={ref} {...props}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

export { Input };