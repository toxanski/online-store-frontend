import {TitleTagProps} from "./TitleTag.props";
import styles from './TitleTag.module.scss';
import classnames from "classnames";

const TitleTag = ({ tagName = 'h1', children, className }: TitleTagProps): JSX.Element => {
    switch (tagName) {
        case 'h1':
            return <h1 className={classnames(styles.h1, className)}>{children}</h1>;
        case 'h2':
            return <h2 className={classnames(styles.h2, className)}>{children}</h2>;
        case 'h3':
            return <h3 className={classnames(styles.h3, className)}>{children}</h3>;
        default:
            return <></>;
    }
};

export { TitleTag };