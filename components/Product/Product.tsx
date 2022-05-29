import classnames from "classnames";
import styles from './Product.module.scss';
import { ProductProps } from "./Product.props";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";

const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
    return (
        <Card className={classnames(className, styles.product)}>
            <div className={styles.logo}>
                {/*<img src={product.image} alt="product Image"/>*/}
                <img
                    src='https://i0.wp.com/www.primefaces.org/wp-content/uploads/2017/09/feature-react.png?ssl=1'
                    alt="product Image"
                    style={{ width: '70%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                />
                LOGO
            </div>
            <div className={styles.title}>{product.title}</div>
            <div className={styles.price}>{product.price}</div>
            <div className={styles.credit}>{product.credit}</div>
            <div className={styles.rating}><Rating rating={product.reviewAvg ?? 0} /></div>
            <div className={styles.tags}>{product.categories.map(category =>
                <Tag key={category}>{category}</Tag>)}
            </div>
            <div className={styles.priceTitle}>цена</div>
            <div className={styles.creditTitle}>кредит</div>
            <div className={styles.reviewTitle}>{product.reviewCount} отзыва</div>
        </Card>
    );
};

export { Product };