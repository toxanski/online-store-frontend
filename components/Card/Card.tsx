import { CardProps } from "./Card.props";
import { PropsWithChildren } from "react";
import styles from './Card.module.scss';
import classnames from "classnames";

const Card = ({ color = 'white', children, className, ...props }: PropsWithChildren<CardProps>): JSX.Element => {
    return (
        <div className={classnames(className, styles.card, {
            [styles.blue]: color === 'blue'
        })} {...props}>
            {children}
        </div>
    );
};

export { Card };