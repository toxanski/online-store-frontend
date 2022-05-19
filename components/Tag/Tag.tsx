import React from 'react';
import { TagProps } from "./Tag.props";
import classnames from "classnames";
import styles from './Tag.module.scss';

const Tag = ({ size = 'sm', color = 'ghost', href, className, children, ...props }: TagProps) => {
    return (
        <div
            className={classnames(className, styles.tag, {
                [styles.sm]: size === 'sm',
                [styles.lg]: size === 'lg',
                [styles.ghost]: color === 'ghost',
                [styles.primary]: color === 'primary',
                [styles.green]: color === 'green',
                [styles.grey]: color === 'grey',
                [styles.red]: color === 'red'
            })}
            {...props}
        >
            {
                href ? <a href={href}>{children}</a> : <>{children}</>
            }
        </div>
    );
};

export { Tag };