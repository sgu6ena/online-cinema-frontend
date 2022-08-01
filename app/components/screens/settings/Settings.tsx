import { FC } from 'react'
import Heading from '../../ui/heading/Heading'
import { settingsMenu } from './menu.data'
import Link from 'next/link'

const Settings: FC = ({children}) => {
	return (
		<div className='p-layout h-full'>
			<div className={'flex items-stretch gap-20 h-full '}>
				<div className={' bg-gray-600 w-96 p-10'}>
					<Heading title={'Настройки'} className='mb-5' />
					<ul>
						{settingsMenu.map(item => <li key={item.link}><Link href={item.link}><a>{item.title}</a></Link></li>)}
					</ul>
				</div>
				<div>
					{children}
				</div>
			</div>
		</div>
	)
}

export default Settings
