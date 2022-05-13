import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '../../../assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className="px-layout  text-3xl text-white gap-3 flex items-center">
				<Image
					className={'flex-shrink-0'}
					src={logoImage}
					height={25}
					width={35}
					alt="Portal"
					draggable={false}
				/>

				<div>PORTAL</div>
			</a>
		</Link>
	)
}

export default Logo
