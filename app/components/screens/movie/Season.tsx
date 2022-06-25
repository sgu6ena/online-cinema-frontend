import cn from 'classnames'
import {FC} from 'react'

import {IMedia} from '../../../shared/types/movie.types'

import styles from './Movie.module.scss'
import Image from "next/image";
import {getListDot} from "../../../utils/movie/getGenresList";

export interface ISeason extends IMedia {
    index: number
    fn: (id: number, title: string) => void
    logo: string
}


const Season: FC<ISeason> = ({isActive = false, items, fn, logo, title}) => {
    return (
        <div className={styles.season}>
            <div className={cn(!isActive ? 'hidden' : styles.active)}>

                {items.map((item) => (
                    <>
                        <button

                            key={item.file}
                            className={styles.episode}
                            onClick={() => {
                                return fn(item.file, getListDot([title, item.title]))
                            }}
                        >
                            <div className={styles.imageBox}>
                                <Image
                                    src={logo}
                                    alt={item.title}
                                    layout='fill'
                                    priority
                                    unoptimized
                                />
                                <Image
                                    src={logo}
                                    alt={''}
                                    layout='fill'
                                    priority
                                    unoptimized
                                    className={styles.poster}
                                /></div>
                            {item.isActive && <div className={styles.progress}></div>}
                            <span>{item.title}</span>
                        </button>
                    </>
                ))}
            </div>
        </div>


    )
}

export default Season
