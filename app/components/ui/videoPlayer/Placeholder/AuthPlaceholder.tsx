import {FC} from 'react';
import styles from "./AuthPlaсeholder.module.scss"
import AuthButton from "./AuthButton";

const AuthPlaceholder: FC<{ slug: string }> = ({slug}) => {
    return (
        <div className={styles.placeholder}>
            <div>
                <div>Для просмотра фильма вы должны войти</div>
                <AuthButton slug={slug}/>
            </div>
        </div>
    );
};

export default AuthPlaceholder;