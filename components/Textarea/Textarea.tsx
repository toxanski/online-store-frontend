import { TextareaProps } from "./Textarea.props";
import classnames from "classnames";
import styles from './Textarea.module.scss';

const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
    return <textarea className={classnames(styles.textarea, className)} {...props}/>;
};

export { Textarea };