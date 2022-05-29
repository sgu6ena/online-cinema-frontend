import {FC} from 'react'

import MaterialIcon from '../../ui/MaterialIcon'

import styles from './Movie.module.scss'
import {FaImdb} from "react-icons/fa";
import {SiKinopoisk} from "react-icons/si";

export interface IRating {
    imdb: number
    kp: number
    age?: string
}

const Rating: FC<IRating> = ({imdb, kp, age}) => {
    return (
        <div className={styles.rating}>
            {/*<span className="mr-1">IMDB </span>*/}
            <FaImdb/>

            {/*<MaterialIcon name={'MdStarRate'}/>*/}
            <span className="mx-1">{imdb.toFixed(1)}</span>
            {/*<span className="mx-1">|</span>*/}
            {/*<span className="mx-1"> Кинопоиск </span>*/}
            <SiKinopoisk/>
            {/*<MaterialIcon name={'MdStarRate'}/>*/}
            <span>{kp.toFixed(1)}</span>
            {age && <span className="btn-primary rounded p-1 ml-5">{age}</span>}
        </div>
    )
}

export default Rating
