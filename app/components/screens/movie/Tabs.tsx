import cn from 'classnames'
import { FC, useState } from 'react'

import { IMedia } from '../../../shared/types/movie.types'

import styles from './Movie.module.scss'
import Season from './Season'

const Tabs: FC<{ media: IMedia[]; fn: (id: number) => void }> = ({
	media,
	fn,
}) => {
	const [active, setActive] = useState(0)

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
							{season.title}
						</button>
					))}
			</div>
			{media.map((season, index) => (
				<>
					<Season
						key={index}
						title={season.title}
						items={season.items}
						index={index}
						isActive={active === index}
						fn={fn}
					/>
				</>
			))}
		</div>
	)
}

export default Tabs
