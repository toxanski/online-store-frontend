import classnames from "classnames";
import styles from './Text.module.scss';
import { TextProps } from "./Text.props";

const Text = ({ size = 'md', children, className, ...props }: TextProps): JSX.Element => {
    return (
        <p className={classnames(styles.text, className, {
            [styles.large]: size === 'lg',
            [styles.medium]: size === 'md',
            [styles.small]: size === 'sm'
        })} {...props}>
            {children}
        </p>
    );
};

export { Text };