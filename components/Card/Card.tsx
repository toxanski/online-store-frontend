import { CardProps } from "./Card.props";
import { ForwardedRef, forwardRef, PropsWithChildren } from "react";
import styles from './Card.module.scss';
import classnames from "classnames";

const Card = forwardRef((
    { color = 'white', children, className, ...props }: PropsWithChildren<CardProps>,
    ref: ForwardedRef<HTMLDivElement>
): JSX.Element => {
    return (
        <div ref={ref} className={classnames(className, styles.card, {
            [styles.blue]: color === 'blue'
        })} {...props}>
            {children}
        </div>
    );
});

export { Card };