import { FC } from 'react'
import { useStatistic } from './useStatistic'


import styles from './statistic.module.scss'
import Link from 'next/link'
import { getGenreUrl } from '@/config/url.config'
import Heading from '../../../ui/heading/Heading'
import { GENRES_ALT } from '../../genre/data.genres'
import StatisticSlider from '../../../ui/statisticSlider/statisticSlider'
import { collectionsToItems } from '../../home/Home'

const StatisticBlock: FC<{ id: string }> = ({ id }) => {


	const { data, isLoading } = useStatistic(id)
	const movies = data?.data.data.items ||[]
	const title = data?.data.data.title || ''

	const collection ={
		title,
		cid: Number(id),
		autoplay: true,
		infinite: true,
		viewport: 0.1,
		items:movies,
	}
	return (
		<div className={'mb-5'}>

			<div className={styles.collectionsWrapper} key={collection.title}>
				<div className={styles.collection}>
					<Link href={getGenreUrl(collection.cid.toString())}>
						<a>
							<Heading title={GENRES_ALT.find(item => item.id===collection.cid)?.name||collection.title} />
						</a>
					</Link>
				</div>
				<StatisticSlider
					items={collectionsToItems(collection.items.filter((i) => i.id))}
				/>
			</div>
		</div>
	)
}

export default StatisticBlock