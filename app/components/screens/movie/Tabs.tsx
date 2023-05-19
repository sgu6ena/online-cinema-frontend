import cn from 'classnames'
import { FC, useState } from 'react'

import { IMedia } from '@/shared/types/movie.types'

import styles from './Movie.module.scss'
import Season from './Season'

interface ITabs {
	activeId?:number
	media: IMedia[]
	fn: (id: number, title: string) => void
	logo: string
}

const Tabs: FC<ITabs> = ({ media, fn, logo,activeId }) => {
	const activeTabIdx = media.findIndex(season => season.isActive)
	const [active, setActive] = useState(activeTabIdx >= 0 ? activeTabIdx : 0)

	return (
		<div className={styles.tabPanel}>
			<div className={styles.tabs}>
				{media.length > 1 &&
					media.map((season, index) => (
						<button
							key={index}
							className={cn(active === index && styles.active)}
							onClick={() => setActive(index)}
						>
							{active === index ? season.title : season.title.slice(6)}
						</button>
					))}
			</div>
			{media.map((season, index) => (
				<Season
					key={index}
					logo={logo}
					title={season.title}
					items={season.items}
					index={index}
					isActive={active === index}
					fn={fn}
					activeId={activeId}
				/>
			))}
		</div>
	)
}

export default Tabs
