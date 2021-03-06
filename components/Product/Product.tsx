import classnames from "classnames";
import styles from './Product.module.scss';
import { ProductProps } from "./Product.props";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { TitleTag } from "../TitleTag/TitleTag";
import { convertPriceRu } from "../../helpers/price";
import { Divider } from "../Divider/Divider";
import { declinationOfNum } from "../../helpers/num-declination";
import Image from 'next/image';
import { useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { API } from "../../helpers/api";
import axios from "axios";
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import { UserTokenPayload } from "../Basket/Basket.inteface";

const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    function scrollToReview() {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    async function addProductToCart() {
        const token = Cookies.get('user_token');
        if (token) {
            // Todo: поставить гард на добавление в корзину
            const { _id } = jwt_decode<UserTokenPayload>(token);
            const { data } = await axios.post(`${API.cart.add}/${_id}`, {
                "productId": product._id
            });
            console.log(data);
            
        }
    } 

    return (
        <div>
            <Card className={styles.product}>
                <div className={styles.logo}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_DOMAIN}/static/${product.image}`}
                        alt={product.title}
                        width={70}
                        height={60}
                    />
                </div>
                <TitleTag tagName='h3' className={styles.title}>{product.title}</TitleTag>
                <div className={styles.price}>
                    {convertPriceRu(product.price)}
                    {product.oldPrice &&
                        <Tag className={styles.price__old} color='green'>
                            -{convertPriceRu(product.oldPrice - product.price)}
                        </Tag>}
                </div>
                <div className={styles.credit}>
                    {convertPriceRu(product.credit)}
                    <span className={styles.month}>/мес</span>
                </div>
                <div className={styles.rating}><Rating rating={product.reviewAvg ?? 0}/></div>
                <div className={styles.tags}>{product.categories.map(category =>
                    <Tag key={category} className={styles.category}>{category}</Tag>)}
                </div>
                <div className={styles.priceTitle}>цена</div>
                <div className={styles.creditTitle}>кредит</div>
                <div className={styles.reviewTitle}>
                    <a
                        href="#ref"
                        onClick={scrollToReview}
                    >
                        {product.reviewCount}&nbsp;
                        {declinationOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                    </a>
                </div>
                <Divider className={styles.hr}/>
                <div className={styles.description}>{product.description}</div>
                <div className={styles.feature}>
                    {product.characteristics.map(characteristic => (
                        <div className={styles.characteristic} key={characteristic.name}>
                            <span className={styles.characteristicName}>{characteristic.name}</span>
                            <span className={styles.characteristicDots}/>
                            <span className={styles.characteristicValue}>{characteristic.value}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.advBlock}>
                    {product.advantages && <div className={styles.advantages}>
                        <h4>Преимущества</h4>
                        <div>{product.advantages}</div>
                    </div>}
                    {product.disAdvantages && <div className={styles.disadvantages}>
                        <h4>Недостатки</h4>
                        <div>{product.disAdvantages}</div>
                    </div>}
                </div>
                <Divider className={classnames(styles.hr, styles.hr2)}/>
                <div className={styles.actions}>
                    <Button appearance='primary' onClick={addProductToCart}>Добавить в корзину</Button>
                    <Button
                        appearance='ghost'
                        arrow={isReviewOpened ? "down" : "right"}
                        className={styles['review-button']}
                        onClick={() => setIsReviewOpened(!isReviewOpened)}
                    >Читать отзывы </Button>
                </div>
            </Card>
            <Card
                ref={reviewRef}
                color='blue'
                className={classnames(styles.review, {
                    [styles.reviewOpened]: isReviewOpened,
                    [styles.reviewClosed]: !isReviewOpened
                })}>
                {product.reviews.map(review => (
                    <div key={review._id}>
                        <Review review={review}/>
                        <Divider/>
                    </div>
                ))}
                <ReviewForm productId={product._id}/>
            </Card>
        </div>
    );
};

export { Product };