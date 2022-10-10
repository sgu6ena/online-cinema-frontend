import { FC, ReactNode, useState } from 'react'
import styles from './Faq.module.scss'
import classNames from "classnames";

interface Props {
    children?: ReactNode,
    title: string
    answer?: string
}

const FaqAccordion: FC<Props> = ({children, answer, title}) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={styles.faq} onClick={() => setOpen(!open)}>
            <div className={styles.question}>
                <h5>{title}</h5>
                   <span className={classNames(styles.button, open && styles.active )}></span>
            </div>
            <div className={classNames(open ? styles.active : styles.inactive, styles.answer)}>
                <p>{answer}</p>
                {children}
            </div>
        </div>
    );
};

export default FaqAccordion;