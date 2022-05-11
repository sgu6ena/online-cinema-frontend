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
		const data = await PortalService.getMain()

		const slides: ISlide[] = data.slider.map((m: any) => ({
			_id: m.id,
			bigPoster: m.logo,
			link: getMoviesUrl(m.id),
			title: 'title',
			// subTitle: getGenresList(m.genres),
		}))

		return {
			props: {
				slides,
				collections: data.collections,
			} as IHome,
		}
	} catch (err) {
		return {
			props: {
				slides: [],
				collections: [],
			} as IHome,
		}
	}
}
