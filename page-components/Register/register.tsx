import { useForm } from 'react-hook-form';
import { Button, Card, Input, TitleTag } from '../../components';
import { IRegisterForm } from './register.interface';
import styles from './register.module.scss';
import axios from "axios";
import { API } from '../../helpers/api';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { RegisterProps } from "./register.props";

const Register = ({ className, ...props }: RegisterProps): JSX.Element => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm<IRegisterForm>();
    const router = useRouter();

    async function onSubmit(formData: IRegisterForm) {
        try {
            const { data } = await axios.post(API.auth.register, {
                login: formData.email,
                password: formData.password
            });
            if (data._id) {
                router.push('/');
                console.log(data);
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Card color='blue' className={classnames(styles.wrapper, className)} {...props}>
            <TitleTag tagName='h3'>Регистрация: </TitleTag>
            <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                type='email'
                placeholder='Email'
                className={styles.input}
                {...register('email', { required: { value: true, message: 'Введите email' } })}
                error={errors.email}
            />
            <Input
                type='password'
                placeholder='Пароль'
                className={styles.input}
                {...register('password', { required: { value: true, message: 'Введите пароль' } })}
                error={errors.password}
            />
            <Button appearance='primary' className={styles.button}>Зарегестрироваться</Button>
        </form>
        </Card>
    );
};

export { Register };