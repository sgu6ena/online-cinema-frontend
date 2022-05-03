import cn from 'classnames'
import {FC} from 'react'

import Meta from '../../../utils/meta/Meta'
import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'

import styles from './Catalog.module.scss'
import {ICatalogPortal} from './catalog.interface'

const CatalogPortal: FC<ICatalogPortal> = ({title, description, data}) => {
    return (
        <Meta title={title} description={description}>
            <Heading title={title} className={styles.heading}/>
            {description && (
                <Description text={description} className={styles.description}/>
            )}

            <section className={styles.movies}>
                {data.data.items.map((movie) => (
                    <GalleryItem
                        item={{
                            name: movie.title,
                            link: movie.url,
                            posterPath: movie.logo,
                            content: {
                                title: movie.title,
                            },
                        }}
                        variant="vertical"
                        key={movie.id}
                    />
                ))}
            </section>
            <section className="my-2">
                <button
                    className={cn(
                        'p-4 m-1 btn-primary',
                        data.pagination.currentPage - 1 < 1 && 'disabled'
                    )}
                >
                    {'<<'}
                </button>
                <button
                    className={cn(
                        'p-4 m-1 btn-primary',
                        data.pagination.currentPage - 1 < 1 && 'disabled'
                    )}
                >
                    {'<'}
                </button>

                {data.pagination.currentPage - 1 > 0 && (
                    <>
                        <span className="p-4"> </span>
                        <button className="p-4 m-1   btn-primary">
                            {data.pagination.currentPage - 1}
                        </button>
                    </>
                )}
                <button className="p-4 m-1 border-yellow-700 border-2 btn-primary">
                    {' '}
                    {data.pagination.currentPage}
                </button>

                {data.pagination.currentPage + 1 < data.pagination.totalPages && (
                    <>
                        <button className="p-4 m-1 btn-primary">
                            {' '}
                            {data.pagination.currentPage + 1}
                        </button>
                        <span className="p-4"> </span>
                        <button className="p-4 m-1  btn-primary">
                            {' '}
                            {data.pagination.totalPages}
                        </button>
                    </>
                )}

                <button
                    className={cn(
                        'p-4 m-1 btn-primary',
                        data.pagination.currentPage + 1 >= data.pagination.totalPages &&
                        'disabled'
                    )}
                >
                    {'>'}
                </button>
                <button
                    className={cn(
                        'p-4 m-1 btn-primary',
                        data.pagination.currentPage + 1 >= data.pagination.totalPages &&
                        'disabled'
                    )}
                >
                    {'>>'}
                </button>
            </section>
        </Meta>
    )
}

export default CatalogPortal
