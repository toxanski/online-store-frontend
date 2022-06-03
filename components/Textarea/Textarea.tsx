import { TextareaProps } from "./Textarea.props";
import classnames from "classnames";
import styles from './Textarea.module.scss';
import { ForwardedRef, forwardRef } from "react";

const Textarea = forwardRef((
    { className, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
): JSX.Element => {
    return <textarea className={classnames(styles.textarea, className)} ref={ref} {...props}/>;
});

export { Textarea };