import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'

import {getGenreUrl} from '../../../config/url.config'
import {
    getCountryList,
    getCountryListAlt,
} from '../../../utils/movie/getCountryList'
import {
    getGenresList,
    getGenresListAlt,
} from '../../../utils/movie/getGenresList'
import Heading from '../../ui/heading/Heading'
import Vote from '../../ui/vote/Vote'

import styles from './Movie.module.scss'
import Rating from './Rating'
import {usePortalMovie} from './usePortalMovie'

const Movie: FC = () => {
    const {isLoading, movie} = usePortalMovie()

    return (
        <div className={styles.movie}>
            {isLoading && 'load...'}
            {movie && (
                <div className={styles.main}>
                    <div className={styles.description}>
                        <Heading title={movie.title} className="mb-5 "/>

                        <p className="my-5 pb-5">
                            <span>{movie.year}</span> |{' '}
                            {movie.genre.map((genre) => (
                                <>
                                    <Link href={getGenreUrl(genre.id.toString())}>
                                        <a>{genre.name} </a>
                                    </Link>{' '}
                                    |{' '}
                                </>
                            ))}
                            <span>{getCountryListAlt(movie.country)}</span>
                        </p>
                        <p></p>
                        <p>Длительность: {movie.length} мин.</p>
                        <p>Режиссер: {getGenresList(movie.creator)}</p>
                        <p>Продюссер: {getGenresList(movie.producer)}</p>
                        <p>В ролях: {getGenresList(movie.in_the_roles)}</p>
                        <p className="my-5 mt-5 pt-5">{movie.review}</p>


                        <p>{(movie.media.map(season => (<>
                            <ul>{season.title}</ul>
                            {season.items.map(epizode => (<li> {epizode.title}</li>))}
                        </>)))}</p>
                    </div>
                    <div className={styles.right}>
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
                        <Rating
                            kp={movie.rate_kp}
                            imdb={movie.rate_imdb}
                            age={movie.rate_age}
                        />
                        <Vote vote={movie.vote} my_vote={5} onClick={() => 5}/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Movie
