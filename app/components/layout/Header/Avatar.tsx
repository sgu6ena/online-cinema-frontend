import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { useAuth } from '../../../hooks/useAuth'

const Avatar: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user?.avatar && (
				<Link href="/profile">
					<a className="flex-center-between">
						<Image
							src={user?.avatar}
							width={40}
							height={40}
							className="rounded-full"
						/>
					</a>
				</Link>
			)}
		</>
	)
}

export default Avatar
