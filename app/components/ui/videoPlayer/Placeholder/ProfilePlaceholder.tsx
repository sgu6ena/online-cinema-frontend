import {FC} from 'react';
import styles from "./AuthPlaсeholder.module.scss"

import Link from "next/link";


const ProfilePlaceholder: FC = () => {
    return (
        <div className={styles.placeholder}>
            <div>
                <div>Для просмотра фильма вы должны приобрести подписку</div>
                <Link href={`/profile`}>
                    <a className={styles.btn}>Личный кабинет</a>
                </Link>
            </div>
        </div>
    );
};

export default ProfilePlaceholder;