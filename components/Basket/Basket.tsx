import { Button } from "../Button/Button";
import BasketIcon from './basket.svg';
// import BasketIcon2 from './cart.svg';
import styles from './Basket.module.scss';
import { BasketProps } from "./Basket.props";
import classnames from "classnames";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { useForm } from "react-hook-form";
import { IBasketForm, ProductsItem, UserCart, UserCartInfo, UserTokenPayload } from "./Basket.inteface";
import axios from "axios";
import { API } from "../../helpers/api";
import jwt_decode from 'jwt-decode';
import { Tag } from "../Tag/Tag";
import { ProductModel } from "../../interfaces/product.interface";
import { TitleTag } from "../TitleTag/TitleTag";
import Image from 'next/image';
import { Divider } from "../Divider/Divider";

const Basket = ({ className, ...props }: BasketProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    const [isAuth, setIsAuth] = useState<boolean>();
    const [totalProducts, setTotalProducts] = useState<number>(0);
    const [userProducts, setUserProducts] = useState<ProductModel[]>([]);
    const [email, setEmail] = useState<string>();

    const { register, reset, handleSubmit, formState: { errors } } = useForm<IBasketForm>();

    useEffect(() => {
        const userToken = Cookies.get('user_token');
        if (userToken) {
            setIsAuth(true);
            const { _id: userId, email } = jwt_decode<UserTokenPayload>(userToken);
            setEmail(email);
            let data: UserCartInfo;
            getUserCart(userId).then(res => {
                data = res[0];
                setTotalProducts(data.cartCount);
                getCartProducts(data.cart.products, userToken);
            });
        }
    }, []);

    async function getUserCart(userId: string) {
        const { data } = await axios.get<UserCart>(`${API.auth.getCart}/${userId}`);
        return data;
    }

    function getCartProducts(products: ProductsItem[], userToken: string) {
        const arr: ProductModel[] = [];
        products.forEach(({ productId }) => {
            try {
                axios.get<ProductModel>(`${API.product.getProductById}/${productId}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                })
                .then(({data, status}) => {
                    if (status === 200) {
                        arr.push(data);
                    }
                });

            } catch (error) {
                console.error(error);
            }
        });
        setUserProducts(arr);
    }

    async function onSubmit(formData: IBasketForm) {
        try {
            const { data: { access_token } } = await axios.post(API.auth.login, {
                login: formData.email,
                password: formData.password
            });
            if (access_token) {
                Cookies.set('user_token', access_token);
                reset();
                setIsAuth(true);
            }
        } catch (e) {
            console.error(e);
        }
    }

    console.log('userProducts2: ', userProducts);
    return (
        <div className={styles.basketWpapper}>
            <Button
                appearance='ghost'
                className={classnames(className, styles.basketButton)}
                onClick={() => {
                    setIsOpened(!isOpened);
                }}
            >
                <BasketIcon className={styles.icon}/>
                {totalProducts && <Tag color='primary' className={styles.totalProducts}>{totalProducts}</Tag>}
            </Button>
            {isOpened && <div className={styles.basketPanel}>

                {!isAuth && <form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            placeholder='Email'
                            className={styles.input}
                            {...register('email', { required: { value: true, message: 'Заполните поле email' } })}
                            error={errors.email}
                        />
                        <Input
                            placeholder='Пароль'
                            className={styles.input}
                            {...register('password', { required: { value: true, message: 'Заполните поле пароля' } })}
                            error={errors.password}
                        />
                        <Button appearance='primary'>Войти</Button>
                    </form>}

                {isAuth && <div className={styles.busket}>
                        <div className={styles.busketTitle}>Привет, {email} 👋</div>
                        <TitleTag tagName='h3'>Корзина курсов: </TitleTag>
                        <ul className={styles.busketList}>
                            {userProducts && userProducts.map(product => (
                                <li key={Math.random()} className={styles.busketItem}>
                                    <Image 
                                        src={`${process.env.NEXT_PUBLIC_DOMAIN}/static/${product.image}`} 
                                        alt={product.title} 
                                        width={40}
                                        height={32}
                                        className={styles.busketItemImg}
                                    />
                                    <span className={styles.busketItemTitle}>{product.title}</span>
                                    <span className={styles.busketItemPrice}>{product.price}</span>
                                    <Divider/>
                                </li>
                            ))}
                        </ul>
                    </div>}
            </div> }
        </div>
    );
};

export { Basket };