import { FC } from 'react'
import styles from './footer.module.scss'
import Subheading from '../../ui/heading/Subheading'
import { aboutUs, sections } from './menu.data'
import Link from 'next/link'
import SocialLinks from './socialLinks'

const Footer:FC= () => {
	return (
		<div className={styles.footer}>
			<div className={styles.first}>
				<Subheading title={'О нас'}/>
					<ul>
						{aboutUs.map(item=> <li key={item.link} ><Link href={item.link}><a>{item.title}</a></Link></li>)}
					</ul>
			</div>
			<div className={styles.second}>
				<Subheading title={'Разделы'}/>
				<ul>
					{sections.map(item=> <li key={item.title} ><Link href={item.link}><a>{item.title}</a></Link></li>)}
				</ul>
			</div>
			<div className={styles.last}>
				<SocialLinks/>
			</div>
		</div>
	)
}

export default Footer