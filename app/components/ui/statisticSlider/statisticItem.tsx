import { FC } from 'react'
import { IMoviePortal } from '@/shared/types/movie.types'
import styles from './statisticCollectiom.module.scss'

const StatisticItem: FC<{item:IMoviePortal, index?:number}> = ({ item, index }) => {
	return (
		<div className={styles.item}>
			{index? <div className={styles.index}>{index}</div>:'' }
			<img src={item.logo} alt={item.title} title={item.title}  />
			{item.cnt ? <div className={styles.cnt}>{'просмотров: ' + item.cnt}</div>:''}

			{item.vote?.like ? <div className={styles.like}>{'лайков: ' + item.vote?.like}</div>:''}
			{item.vote?.dislike ? 	<div  className={styles.dislike}>{'дизлайков: ' + item.vote?.dislike}</div>:''}
		</div>
	)
}

export default StatisticItem