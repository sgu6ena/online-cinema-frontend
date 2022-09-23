import React, {FC} from 'react'
import styles from './Movie.module.scss'
import Heading from '../../ui/heading/Heading'
import Link from 'next/link'
import {getGenreUrl} from '../../../config/url.config'
import {getCountryList} from '../../../utils/movie/getCountryList'
import {getGenresList} from '../../../utils/movie/getGenresList'

import {IMoviePortalFull} from '../../../shared/types/movie.types'
import {minuteToHours} from '../../../utils/date/minuteToHours'
import Rating from "../../ui/Rating";

const MovieDescription: FC<{ movie: IMoviePortalFull }> = ({movie}) => {
    return (

        <div className={styles.description}>
            <Heading title={movie.title} className={styles.laptop}/>
            <p><Rating imdb={movie.rate_imdb} kp={movie.rate_kp}/></p>
            <p className={styles.genres}>
                <a>{movie.year}</a><span>·</span>
                {movie.genre.map((genre) => (
                    <>
                        <Link href={getGenreUrl(genre.id)}>
                            <a>{genre.name}</a>
                        </Link>
                        <span>·</span>
                    </>
                ))}
                <div className={''}>{minuteToHours(movie.length)}</div>
                {movie.rate_age && <><span>·</span>
                    <div className='px-3 px-1 border '>{movie.rate_age}</div>
                </>}
            </p>

            <p>
                <div className={styles.subtitle}>Режиссер:</div>
                {getGenresList(movie.creator)}</p>
            <p>
                <div className={styles.subtitle}>Продюссер:</div>
                {getGenresList(movie.producer)}</p>
            <p>
                <div className={styles.subtitle}>В ролях:</div>
                {getGenresList(movie.in_the_roles)}</p>
            <p>
                <div className={styles.subtitle}>Страны:</div>
                {getCountryList(movie.country)}</p>
            <h2>О фильме</h2>
            <p>{movie.review}</p>
        </div>

    )
}

export default MovieDescription