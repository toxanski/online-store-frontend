import styles from './Rating.module.scss';
import { RatingProps } from "./Rating.props";
import { useEffect, useState, KeyboardEvent, ForwardedRef, forwardRef } from "react";
import StarIcon from './star.svg';
import classnames from "classnames";

const Rating = forwardRef((
    { error, isEditable = false, rating, setRating, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
) => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    function constructRating(currentRating: number) {
        const updatedRating = ratingArray.map((elem: JSX.Element, i: number) => {
            return (
                <span
                    className={classnames(styles.star, {
                        [styles.filled]: i < currentRating,
                        [styles.editable]: isEditable
                    })}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => changeRating(i + 1)}
                >
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && afterSpace(i + 1, e)}
                    />
                </span>
            );
        });
        setRatingArray(updatedRating);
    }

    function changeDisplay(i: number) {
        if (!isEditable) return;
        constructRating(i);
    }

    function changeRating(i: number) {
        if (!isEditable || !setRating) return;
        setRating(i);
    }

    function afterSpace(i: number, e: KeyboardEvent<SVGElement>) {
        if (e.code === 'Space' || !setRating) return;
        setRating(i);
    }

    return (
        <div {...props} ref={ref} className={classnames(styles.ratingWrapper, {
            [styles.error]: error
        })}>
            {ratingArray.map((elem, i) => <span key={i}>{elem}</span>)}
            {error && <span className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});

export { Rating };