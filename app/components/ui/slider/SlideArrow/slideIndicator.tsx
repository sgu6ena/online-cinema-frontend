import { FC } from 'react'
import styles from './SlideArrow.module.scss'
import cn from 'classnames'

const SlideIndicator: FC<{ count: number, activeNumber: number }> = ({ activeNumber, count }) => {
	return (
		<div className={styles.indicators}>
			{Array.from(Array(count).keys()).map(i => <span key={i}
																											className={cn(styles.circle, i === activeNumber && styles.active)} />)}
		</div>
	)
}

export default SlideIndicator