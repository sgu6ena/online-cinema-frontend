import Image from 'next/image'
import {FC} from 'react'

import {getGenresListAlt} from '../../../utils/movie/getGenresList'
import MaterialIcon from '../../ui/MaterialIcon'
import Heading from '../../ui/heading/Heading'

import styles from './Movie.module.scss'
import {usePortalMovie} from './usePortalMovie'
import {getCountryList} from "../../../utils/movie/getCountryList";


const Movie: FC = () => {
    const {isLoading, movie} = usePortalMovie()

    return (
        <div className={styles.movie}>
            {isLoading && 'load...'}
            {movie && (
                <div className={styles.main}>
                    <div className={styles.description}>
                        <Heading title={movie.title} className="mb-3"/>

                        <p>
                            {console.log(movie.country)}
                            {getCountryList(movie.country)} | {getGenresListAlt(movie.genre)} | {movie.year} |{' '}
                            {movie.rate_age}
                        </p>

                        <div className={styles.rating}>
                            <span className="mr-1">IMDB </span>
                            <MaterialIcon name={'MdStarRate'}/>
                            <span className="mx-1">{movie.rate_imdb.toFixed(1)}</span>
                            <span className="mx-1">|</span>
                            <span className="mx-1"> Кинопоиск </span>
                            <MaterialIcon name={'MdStarRate'}/>
                            <span>{movie.rate_kp.toFixed(1)}</span>
                        </div>

                        <p className="my-5">{movie.review}</p>
                    </div>
                    <div className={styles.image}>
                        {movie.logo && (
                            <Image
                                src={movie.logo}
                                alt={movie.title}
                                width={450}
                                height={650}
                                priority
                                unoptimized
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Movie
