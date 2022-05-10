import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'

import Home from '../app/components/screens/home/Home'
import { IHome } from '../app/components/screens/home/home.interface'
import { IGalleryItem } from '../app/components/ui/gallery/gallery.interface'
import { ISlide } from '../app/components/ui/slider/slider.interface'
import { getActorUrl, getMoviesUrl } from '../app/config/api.config'
import { ActorService } from '../app/services/actor.service'
import { MovieService } from '../app/services/movie.service'
import { PortalService } from '../app/services/portal.service'
import { getGenresList } from '../app/utils/movie/getGenresList'

const HomePage: NextPage<IHome> = ({ slides, collections }) => {
	return (
		// <Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
		<Home slides={slides} collections={collections} />
	)
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
	try {
		// const {data: movies} = await MovieService.getAll()

		const data = await PortalService.getMain()

		const slides: ISlide[] = data.slider.map((m: any) => ({
			_id: m.id,
			bigPoster: m.logo,
			link: getMoviesUrl(m.id),
			title: 'title',
			// subTitle: getGenresList(m.genres),
		}))
		// const { data: dataActors } = await ActorService.getAll()
		// const actors: IGalleryItem[] = dataActors.slice(0, 7).map((a) => ({
		// 	name: a.name,
		// 	posterPath: a.photo,
		// 	link: getActorUrl(a.slug),
		// 	content: {
		// 		title: a.name,
		// 		subTitle: `+${a.countMovies} фильмов`,
		// 	},
		// }))
		//
		// const dataTrendingMovies = await MovieService.getMostPopularMovies()
		//
		// const trendingMovies: IGalleryItem[] = dataTrendingMovies
		// 	.slice(0, 7)
		// 	.map((m) => ({
		// 		name: m.title,
		// 		posterPath: m.poster,
		// 		link: getMoviesUrl(m.slug),
		// 	}))

		return {
			props: {
				slides,
				collections: data.collections,
				// trendingMovies,
			} as IHome,
		}
	} catch (err) {
		return {
			props: {
				slides: [],
				collections: [],
				// trendingMovies: [],
			} as IHome,
		}
	}
}
