import { TitleTag } from "../TitleTag/TitleTag";
import { Text } from "../Text/Text";
import { AdvantagesProps } from "./Advantages.props";
import AdvIcon from './advantage.svg';
import styles from './Advantages.module.scss';

const Advantages = ({ advantages }: AdvantagesProps) => {
    return (
        <>
            {advantages.map(adv => {
                return (
                    <div key={adv._id} className={styles.advantage}>
                        <div className={styles.advantage__ico}>
                            <AdvIcon/>
                        </div>
                        <TitleTag tagName='h3' className={styles.advantage__title}>{adv.title}</TitleTag>
                        <hr className={styles.advantage__line}/>
                        <Text size='lg' >{adv.description}</Text>
                    </div>
                );
            })}
        </>
    );
};

export default Advantages;