import { SortEnum, SortProps } from "./Sort.props";
import styles from './Sort.module.scss';
import classnames from "classnames";
import SortIcon from './sort.svg';

const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => {
    return (
        <div className={classnames(styles.sort, className)} {...props}>
            <span
                onClick={() => setSort(SortEnum.Rating)}
                className={classnames(styles.sort__action, {
                [styles.active]: sort === SortEnum.Rating
            })}>
                <SortIcon className={styles.sort__ico}/>По&nbsp;рейтингу
            </span>

            <span
                onClick={() => setSort(SortEnum.Price)}
                className={classnames(styles.sort__action, {
                [styles.active]: sort === SortEnum.Price
            })}>
                <SortIcon className={styles.sort__ico}/>По&nbsp;цене
            </span>
        </div>
    );
};

export { Sort };