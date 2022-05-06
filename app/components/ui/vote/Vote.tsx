import { FC } from 'react'

import { IVotePortal } from '../../../shared/types/movie.types'
import MaterialIcon from '../MaterialIcon'

const Vote: FC<{ vote: IVotePortal; onClick: () => void; my_vote: number }> = ({
	vote: { ats, like, dislike },
	onClick,
	my_vote,
}) => {
	return (
		<div>
			<button onClick={onClick}>
				<MaterialIcon name={'MdThumbUp'} />
				{like}
			</button>
			<button onClick={onClick}>
				<MaterialIcon name={'MdThumbsUpDown'} />
				{ats}
			</button>
			<button onClick={onClick}>
				<MaterialIcon name={'MdThumbDown'} />
				{dislike}
			</button>
		</div>
	)
}

export default Vote
