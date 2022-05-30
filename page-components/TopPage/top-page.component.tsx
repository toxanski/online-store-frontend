import styles from './top-page.module.scss';
import { TopPageProps } from "./top-page.props";
import { Product, Sort, Tag, TitleTag } from "../../components";
import Advantages from "../../components/Advantages/Advantages";
import { SortEnum } from "../../components/Sort/Sort.props";
import { useEffect, useReducer } from "react";
import { sortReducer } from "./sort.reducer";

const TopPageComponent = ({ page, products, firstCategory }: TopPageProps): JSX.Element => {

    const [sortState, dispatchSort] = useReducer(sortReducer, { sort: SortEnum.Rating, products });
    function setSort(sort: SortEnum) {
        dispatchSort({ type: sort });
    }

    useEffect(() => {
        console.log(products);
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <TitleTag tagName='h1'>{page.title}</TitleTag>
                <Tag size='lg' color='grey'>{products && products.length}</Tag>
                <Sort sort={sortState.sort} setSort={setSort} />
            </div>

            <div>
                {sortState.products && sortState.products.map(product => (
                    <Product key={product._id} product={product}/>
                ))}
            </div>

            {page.advantages && page.advantages.length > 0 &&
                <>
                    <TitleTag tagName='h2' className={styles.head}>Преимущества</TitleTag>
                    <Advantages advantages={page.advantages}/>
                </>}

            {page.seoText &&
                <div
                    className={styles.seo}
                    // т.к. data с админки можно исп-ть dangerouslySetInnerHTML
                    dangerouslySetInnerHTML={{ __html: page.seoText }}
                />
            }
            <TitleTag tagName='h2'>Получаемые навыки</TitleTag>
            {page.tags.map(tag => <Tag key={tag} color='primary'>{tag}</Tag>)}
        </div>
    );
};

export { TopPageComponent };