import styles from './top-page.module.scss';
import { TopPageProps } from "./top-page.props";
import { Tag, TitleTag, Text } from "../../components";
import { convertPriceRu } from "../../helpers/price";
import AdvIcon from '../../components/Advantages/advantage.svg';
import Advantages from "../../components/Advantages/Advantages";

const TopPageComponent = ({ page, products, firstCategory }: TopPageProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <TitleTag tagName='h1'>{page.title}</TitleTag>
                <Tag size='lg' color='grey'>{products && products.length}</Tag>
                <div>Сортировка {convertPriceRu(300000)}</div>
            </div>
            <div>
                {products && products.map(product => (<div key={product._id}>{product.title}</div>))}
            </div>
            {page.advantages && page.advantages.length > 0 &&
                <>
                <TitleTag tagName='h2'>Преимущества</TitleTag>
                <Advantages advantages={page.advantages}/>
            </>}
            {page.seoText && <Text>{page.seoText}</Text>}
            <TitleTag tagName='h2'>Получаемые навыки</TitleTag>
            {page.tags.map(tag => <Tag key={tag} color = 'primary'>{tag}</Tag>)}
        </div>
    );
};

export { TopPageComponent };