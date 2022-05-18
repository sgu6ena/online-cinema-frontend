import cn from 'classnames'
import {FC, useEffect, useState} from 'react'

import {IMedia} from '../../../shared/types/movie.types'

import styles from './Movie.module.scss'
import Subheading from "../../ui/heading/Subheading";

export interface ISeason extends IMedia {
    index: number
    fn: (id: number) => void
}

const Season: FC<ISeason> = ({isActive = false, items, fn}) => {


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
                            {item.title}
                        </button>

                    </>
                ))}
            </div>
        </div>


    )
}

export default Season
