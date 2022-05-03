import {FC} from 'react'

import {getMoviesUrl} from '../../../config/api.config'
import Meta from '../../../utils/meta/Meta'
import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'

import styles from './Catalog.module.scss'
import {ICatalog} from './catalog.interface'

const Catalog: FC<ICatalog> = ({title, description, movies}) => {
    return (
        <Meta title={title} description={description}>
            <Heading title={title} className={styles.heading}/>
            {description && (
                <Description text={description} className={styles.description}/>
            )}

            <section className={styles.movies}>
                {movies.map((movie) => (
                    <GalleryItem
                        item={{
                            name: movie.title,
                            link: getMoviesUrl(movie.slug),
                            posterPath: movie.bigPoster,
                            content: {
                                title: movie.title,
                            },
                        }}
                        variant="horizontal"
                        key={movie._id}
                    />
                ))}
            </section>
        </Meta>
    )
}

export default Catalog
