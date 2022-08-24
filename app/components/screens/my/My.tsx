import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '../../../hooks/useAuth'
import Heading from '../../ui/heading/Heading'

import AuthButton from './AuthButton'
import { myMenu } from './menu.data'

const My: FC = ({ children }) => {
	const { asPath } = useRouter()
	const { user } = useAuth()
	const isUser = !!user
	return (
		<div>
			{!isUser ? (
				<div className="mt-32 text-center">
					<div className="mb-5 text-2xl">
						Для просмотра вашего избранного вы должны войти
					</div>
					<AuthButton slug={asPath} />
				</div>
			) : (
				<div className={'px-layout'}>
					<Heading title={'Я смотрю'} className={'py-8'} />
					<ul className={' flex gap-10'}>
						{myMenu.map((i) => (
							<li
								key={i.link}
								className={cn(
									{
										'text-primary': asPath.split('?')[0] === i.link,
										'text-gray-300': asPath.split('?')[0] !== i.link,
									},
									'text-md underline underline-offset-4 font-bold uppercase'
								)}
							>
								<Link href={i.link}>
									<a>{i.title}</a>
								</Link>
							</li>
						))}
					</ul>
					{children}
				</div>
			)}
		</div>
	)
}

export default My
