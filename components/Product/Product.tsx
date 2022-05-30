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

const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {

    let image;
    if (product.image.includes('notfound')) {
        image = `${process.env.NEXT_PUBLIC_DOMAIN}/static/notfound/notfound.png`;
    } else {
        image = `${process.env.NEXT_PUBLIC_DOMAIN}/static/${product.image}`;
    }

    return (
        <Card className={classnames(className, styles.product)}>
            <div className={styles.logo}>
                <img src={image} alt="product Image"/>
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
                {product.reviewCount} {declinationOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
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
            <Divider className={styles.hr}/>
            <div className={styles.actions}>
                <Button appearance='primary'>Узнать подробнее</Button>
                <Button appearance='ghost' arrow='right' className={styles['review-button']}>Читать отзывы </Button>
            </div>
        </Card>
    );
};

export { Product };