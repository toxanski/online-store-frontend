import { ReviewFormProps } from "./ReviewForm.props";
import styles from './ReviewForm.module.scss';
import classnames from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import CloseIcon from './close.svg';
import { useForm, Controller } from "react-hook-form";
import { IReviewForm } from "./ReviewField.interface";

const ReviewForm = ({ productId, className, ...props }: ReviewFormProps) => {
    const { control, register, handleSubmit } = useForm<IReviewForm>();

    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classnames(styles.reviewForm, className)} {...props}>
                <Input {...register('name')} placeholder='Имя'/>
                <Input {...register('title')} placeholder='Заголовок отзыва' className={styles.inputTitle}/>
                <div className={styles.rating}>
                    <span className={styles.ratingTitle}>Оценка:</span>
                    <Controller
                        control={control}
                        name='rating'
                        render={({ field }) => (
                            <Rating rating={field.value} ref={field.ref} setRating={field.onChange} isEditable/>
                        )}/>
                </div>
                <Textarea {...register('description')} className={styles.description}/>
                <div className={styles.submit}>
                    <Button appearance='primary'>Отправить</Button>
                    <span
                        className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
                <div className={styles.success}>
                    <div className={styles.successTitle}>Ваш отзыва отправлен</div>
                    <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
                    <CloseIcon className={styles.close}/>
                </div>
            </div>
        </form>
    );
};

export { ReviewForm };