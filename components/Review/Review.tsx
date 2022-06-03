import { ReviewProps } from "./Review.props";
import styles from './Review.module.scss';
import UserIcon from './user.svg';
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Rating } from "../Rating/Rating";

const Review = ({ review, className, ...props }: ReviewProps) => {
    const { name, title, description, rating, createdAt } = review;
    return (
        <div className={styles.review}>
            <UserIcon className={styles.userIcon}/>
            <div className={styles.title}>
                <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
                <span>{title}</span>
            </div>
            <div className={styles.date}>
                {format(new Date(createdAt), 'dd MMMM yyyy HH:mm ', { locale: ru })}
            </div>
            <div className={styles.rating}>
                <Rating rating={rating} />
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    );
};

export { Review };