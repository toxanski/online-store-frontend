import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.scss';
import classnames from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from './close.svg';

const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {
    return (
        <div className={classnames(styles.reviewForm, className)} {...props}>
            <Input placeholder='Имя'/>
            <Input placeholder='Заголовок отзыва' className={styles.inputTitle}/>
            <div className={styles.rating}>
                <span className={styles.ratingTitle}>Оценка:</span>
                <Rating rating={0}/>
            </div>
            <Textarea className={styles.description}/>
            <div className={styles.submit}>
                <Button appearance='primary'>Отправить</Button>
                <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
            </div>
            <div className={styles.success}>
                <div className={styles.successTitle}>Ваш отзыва отправлен</div>
                <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
                <CloseIcon className={styles.close}/>
            </div>
        </div>
    );
};

export { ReviewForm };