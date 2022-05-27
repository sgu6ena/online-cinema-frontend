import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { LINKS } from '../../../config/links'
import { useAuth } from '../../../hooks/useAuth'
import { BsPersonSquare } from 'react-icons/bs'


const Avatar: FC = () => {
	const { user } = useAuth()

	return (
		<>

				<Link href={LINKS.PROFILE}>
					<a className="flex-center-between ">
						{user?.avatar ? (	<Image
							src={user.avatar}
							width={40}
							height={40}
							className="rounded-full"
							unoptimized
						/>		) : (
							<BsPersonSquare className='h-10 w-10 text-white' />
						)}
					</a>
				</Link>

		</>
	)
}

export default Avatar
