import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { GiClapperboard } from 'react-icons/gi'
import logoImage from '../../../assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<div>
			<Link href='/'>
				<a className='px-layout mb-10 text-2xl text-white gap-3 flex items-baseline'>
					{/*<Image*/}
					{/*	src={logoImage}*/}
					{/*	height={10}*/}
					{/*	width={20}*/}
					{/*	alt='Portal'*/}
					{/*	draggable={false}*/}
					{/*/>*/}
					<GiClapperboard className='text-primary shrink-0' width={40} />
					<div>PORTAL</div>
				</a>
			</Link>
		</div>
	)
}

export default Logo