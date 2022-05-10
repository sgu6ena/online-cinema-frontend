import cn from 'classnames'
import {FC} from 'react'

import {IVotePortal} from '../../../shared/types/movie.types'
import MaterialIcon from '../MaterialIcon'

import styles from './Vote.module.scss'

const Vote: FC<{ vote: IVotePortal; onClick: () => void; my_vote: number }> = ({
																				   vote: {ats, like, dislike},
																				   onClick,
																				   my_vote = 0,
																			   }) => {
	return (
		<div className={styles.vote}>

			<button
				className={cn(styles.like, my_vote === 3 && styles.myVote)}
				onClick={onClick}
				title="Понравился фильм"
			>
				<MaterialIcon name={'MdThumbUp'}/>
				{like}
			</button>
			<button
				className={cn(styles.ats, my_vote === 2 && styles.myVote)}
				onClick={onClick}
				title=""
			>
				<MaterialIcon name={'MdThumbsUpDown'}/>
				{ats}
			</button>
			<button
				className={cn(styles.dislike, my_vote === 1 && styles.myVote)}
				onClick={onClick}
				title="Не понравился фильм"
			>
				<MaterialIcon name={'MdThumbDown'}/>
				{dislike}
			</button>
		</div>
	)
}

export default Vote
