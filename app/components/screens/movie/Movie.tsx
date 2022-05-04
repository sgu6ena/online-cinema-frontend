import Image from 'next/image'
import { FC } from 'react'

import Heading from '../../ui/heading/Heading'

import { usePortalMovie } from './usePortalMovie'

const Movie: FC = () => {
	const { isLoading, data } = usePortalMovie()

	return (
		<div style={{ color: 'white' }}>
			{isLoading && 'load...'}
			{data && (
				<>
					<Image
						src={data.logo}
						width={400}
						height={600}
						priority
						unoptimized
					/>
					<Heading title={data.title} />
					<p className="my-3">{data.review}</p>
				</>
			)}
		</div>
	)
}

export default Movie
