import styles from './Button.module.scss';
import classnames from 'classnames';
import { ButtonProps } from "./Button.props";

const Button = ({ appearance, children }: ButtonProps): JSX.Element => {
    return (
        <button className={classnames(styles.button, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
        })}>
            {children}
        </button>
    );
};

export default Button;