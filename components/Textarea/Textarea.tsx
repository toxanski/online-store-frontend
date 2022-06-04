import { TextareaProps } from "./Textarea.props";
import classnames from "classnames";
import styles from './Textarea.module.scss';
import { ForwardedRef, forwardRef } from "react";

const Textarea = forwardRef((
    { error, className, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element => {
    return (
        <div className={classnames(styles.textareaWrapper, className)}>
            <textarea className={classnames(styles.textarea, {
                [styles.error]: error
            })} ref={ref} {...props}/>
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

export { Textarea };