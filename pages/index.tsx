import type {NextPage} from 'next';
import TitleTag from "../components/TitleTag/TitleTag";
import Button from "../components/Button/Button";

const Home: NextPage = (): JSX.Element => {
    return (
        <div>
            <TitleTag tagName="h1">TITLE</TitleTag>
            <Button appearance="primary">PRIMARY BUTTON</Button>
            <Button appearance="ghost">GHOST BUTTON</Button>
        </div>
    );
};

export default Home;
