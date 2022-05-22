import type { NextPage } from 'next';
import { TitleTag, Button, Text, Tag, Rating } from '../components';
import { useState } from "react";
import withLayout from "../layout/Layout";

const Home: NextPage = (): JSX.Element => {
    const [rating, setRating] = useState<number>(2);

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
