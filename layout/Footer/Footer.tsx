import { FooterProps } from "./Footer.props";
import classnames from "classnames";
import styles from './Footer.module.scss';
import { format } from 'date-fns';

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
    return (
        <footer
            className={classnames(className, styles.footer)}
            {...props}>
            <div  className="title">
                BEST.shop © {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href="#" target="_blank" className="agreement link">Пользовательское соглашение</a>
            <a href="#" target="_blank" className="policy link">Политика конфиденциальности</a>
        </footer>
    );
};

export default Footer;