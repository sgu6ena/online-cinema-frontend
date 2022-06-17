import cn from 'classnames'
import {FC} from 'react'

import {IMedia} from '../../../shared/types/movie.types'

import styles from './Movie.module.scss'
import Image from "next/image";

export interface ISeason extends IMedia {
    index: number
    fn: (id: number) => void
    logo: string
}


const Season: FC<ISeason> = ({isActive = false, items, fn, logo}) => {


    return (
        <div className={styles.season}>
            <div className={cn(!isActive ? 'hidden' : styles.active)}>

                {items.map((item) => (
                    <>
                        <button

                            key={item.file}
                            className={styles.episode}
                            onClick={() => {
                                return fn(item.file)
                            }}
                        >
                            <div className={styles.imageBox}>
                                <Image
                                    src={logo}
                                    alt={''}
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
                            <div className={styles.progress}></div>
                            <span>{item.title}</span>
                        </button>
                    </>
                ))}
            </div>
        </div>


    )
}

export default Season
