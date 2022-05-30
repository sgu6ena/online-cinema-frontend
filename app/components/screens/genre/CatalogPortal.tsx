import {FC, useEffect, useState} from 'react'

import {getMoviesUrl} from '../../../config/api.config'
import Meta from '../../../utils/meta/Meta'
import GalleryItem from '../../ui/gallery/GalleryItem'
import Heading from '../../ui/heading/Heading'

import styles from '../../ui/catalog-movies/Catalog.module.scss'
import {useGenre} from './useGenre'
import ReactPaginate from 'react-paginate'
import {router} from 'next/client'
import SkeletonLoader from '../../ui/SkeletonLoader'
import CatalogLoader from './CatalogLoader'


const CatalogPortal: FC = () => {

    const query = router.query
    const {movies, title, isLoading, pagination} = useGenre()
    const [titleGenre, setTitleGenre] = useState('')

    useEffect(() => {
        setTitleGenre('')
    }, [query.id])

    useEffect(() => {
        if (title)
            setTitleGenre(title)
    }, [title, query])


    const handlePagination = (page: any) => {
        const path = router.pathname
        const query = router.query
        query.page = page.selected + 1
        router.push({
            pathname: path,
            query: query,
        })
    }

    return (
        <Meta title={titleGenre}>

            {titleGenre ? <Heading title={titleGenre} className={styles.heading}/> :
                <div className='p-5 pb-0'><SkeletonLoader className='h-12'/></div>}
            {!isLoading && movies && pagination ?
                <>
                    <section className={styles.movies} key={pagination.currentPage}>
                        {movies.map((movie) => (
                            <>
                                <GalleryItem
                                    key={movie.id.toString()}
                                    item={{
                                        name: movie.title,
                                        link: getMoviesUrl(movie.id),
                                        posterPath: movie.logo,
                                        content: {
                                            title: movie.title,
                                            subTitle:
                                                (movie.rate_age && movie.rate_age + ' | ') +
                                                (movie.access === 1 ? ' подписка ' : ' бесплатно '),
                                        },
                                    }}
                                    variant='vertical'
                                />
                            </>
                        ))}
                    </section>
                    {pagination ? pagination.totalPages > 1 && <ReactPaginate
                        className='paginate'
                        breakLabel='...'
                        nextLabel=' >'
                        onPageChange={handlePagination}
                        pageRangeDisplayed={2}
                        pageCount={pagination.totalPages}
                        previousLabel='< '
                        activeClassName='active'
                        initialPage={pagination.currentPage - 1}
                    /> : <SkeletonLoader/>}
                </> : <CatalogLoader/>}
        </Meta>
    )
}

export default CatalogPortal
