import { FC } from 'react'
import Heading from '../../ui/heading/Heading'

import Link from 'next/link'
import { headerNavMenu } from '../../layout/Header/menu.data'
import cn from 'classnames'

import { myMenu } from './menu.data'
import { useRouter } from 'next/router'

const My:FC = ({children}) => {
	const { asPath } = useRouter()

	return (
		<div className={''}>
			<div className={'px-layout pt-10'}>
				<ul className={' flex gap-20'}>
					{myMenu.map((i) => (
						<li
							key={i.link}
							className={cn({
								'underline': asPath === i.link,
							})}
						>
							<Link href={i.link}>
								<a>{i.title}</a>
							</Link>
						</li>
					))}

			</ul>
			</div>

			{children}
		</div>
	)
}

export default My