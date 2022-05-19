import styles from './Button.module.scss';
import classnames from 'classnames';
import { ButtonProps } from "./Button.props";
import ArrowIcon from './arrow.svg';

const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
    return (
        <button className={classnames(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
        })}
            {...props}
        >
            {children}
            {arrow !== 'none' && <span className={classnames(styles.arrow, {
                [styles.down]: arrow === 'down'
            })}>
                <ArrowIcon/>
            </span>}
        </button>
    );
};

export { Button };