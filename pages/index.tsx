import type { GetStaticProps, NextPage } from 'next';
import { TitleTag, Button, Text, Tag, Rating } from '../components';
import { useState } from "react";
import withLayout from "../layout/Layout";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interfaces";

const Home: NextPage<HomeProps> = ({ menu, firstCategory }: HomeProps): JSX.Element => {
    const [rating, setRating] = useState<number>(2);

    const variable = 123;
    return (
        <>
            <TitleTag tagName="h1">TITLE</TitleTag>
            <Button
                appearance="primary"
                className="gas"
                arrow="right"
                onClick={() => console.log(1)}>
                PRIMARY BUTTON
            </Button>
            <Button appearance="ghost" arrow="down">GHOST BUTTON</Button>
            <Text>
                Если освоить программы и найти заказы по графическому дизайну, вскоре окажется, что вставать в 6:00
                вовсе не обязательно. Когда у человека вечером продуктивность выше, надо этим пользоваться.
            </Text>
            <Text size="sm">маленький</Text>
            <Text size="lg">большой</Text>
            <Tag size="lg">Кр.Бол.</Tag>
            <Tag color="red">Кр.Бол.</Tag>
            <Tag size="lg" color="primary">Кр.Бол.</Tag>
            <Tag size="lg" color="green">Кр.Бол.</Tag>
            <Tag size="sm" color="grey">Кр.Бол.</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>
        </>
    );
};

export default withLayout(Home);

// TODO: допилить на бэке response - не все поля

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    // остальное меню грузить по необходимости
    const firstCategory = 0;
    const reqUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`;
    const { data: menu } = await axios.post<MenuItem[]>(reqUrl,{
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    };
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[];
    firstCategory: number;
}
