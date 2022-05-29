import { SearchProps } from "./Search.props";
import classnames from "classnames";
import styles from './Search.module.scss';
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import GlassIcon from './glass.svg';
import { useState } from "react";
import { useRouter } from "next/router";

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    function goToSearch() {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        });
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            goToSearch();
        }
    }

    return (
        <div className={classnames(styles.search, className)} {...props}>
            <Input
                className={styles.input}
                placeholder='Поиск...'
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                appearance='primary'
                className={styles.button}
                onClick={() => goToSearch()}
            >
                <GlassIcon/>
            </Button>
        </div>
    );
};

export { Search };