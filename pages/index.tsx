import type { GetServerSideProps, GetStaticProps, NextPage } from 'next'

import Home from '../app/components/screens/home/Home'
import { IHome } from '../app/components/screens/home/home.interface'
import { ISlide } from '../app/components/ui/slider/slider.interface'
import { getMoviesUrl } from '../app/config/api.config'

import { PortalService } from '../app/services/portal.service'


const HomePage: NextPage<IHome> = ({ slides, collections }) => {
	return (
		<Home  />
	)
}

export default HomePage

// export const getServerSideProps: GetServerSideProps = async () => {
// 	try {
// 		const data = await PortalService.getMain()
//
// 		const slides: ISlide[] = data.slider.map((m: any) => ({
// 			_id: m.id,
// 			bigPoster: m.logo,
// 			link: getMoviesUrl(m.id),
// 			title: 'title',
// 			// subTitle: getGenresList(m.genres),
// 		}))
//
// 		return {
// 			props: {
// 				slides,
// 				collections: data.collections,
// 			} as IHome,
// 		}
// 	} catch (err) {
// 		return {
// 			props: {
// 				slides: [],
// 				collections: [],
// 			} as IHome,
// 		}
// 	}
// }
