import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '../../../assets/images/logo.svg'
import { LINKS } from '../../../config/links'

const Logo: FC = () => {
	return (
		<Link href={LINKS.MAIN}>
			<a className="flex-shrink-0 text-3xl text-white gap-3 flex items-center">
				<Image
					src={logoImage}
					height={25}
					width={35}
					alt="Portal"
					draggable={false}
				/>

				<div className="lg:block hidden">PORTAL</div>
			</a>
		</Link>
	)
}

export default Logo
