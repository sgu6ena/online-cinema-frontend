import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import {
	FaFacebookF,
	FaInstagram,
	FaOdnoklassniki,
	FaTelegramPlane,
	FaViber,
	FaVk,
} from 'react-icons/fa'

import { LINKS } from '@/config/links'
import Subheading from '../../ui/heading/Subheading'

import styles from './footer.module.scss'

const SocialLinks: FC = () => {
	return (
		<div className={styles.links}>
			<div className={styles.stores}>
				<Link href={LINKS.APPSTORE}>
					<a>
						<img
							src='/svg/smart/appstore.svg'
							alt='Appstore'
							width={204}
							height={60}
						/>
					</a>
				</Link>
				<Link href={LINKS.GOOGLEPLAY}>
					<a>
						<img
							src='/svg/smart/googleplay.svg'
							alt='GOOGLEPLAY'
							width={204}
							height={60}
						/>
					</a>
				</Link>
			</div>
			<div>
				<Subheading title={'PORTAL на большом экране'} />
				<div className={styles.stores}>
					<Link href={LINKS.SAMSUNG}>
						<a>
							<img
								src='/svg/smart/samsung.svg'
								alt='Samsung'
								width={150}
								height={60}
							/>
						</a>
					</Link>
					<Link href={LINKS.LG}>
						<a>
							<img src='/svg/smart/lg.svg' alt='Lg' width={150} height={60} />
						</a>
					</Link>
					<Link href={LINKS.HISENSE}>
						<a>
							<img
								src='/svg/smart/hisense.svg'
								alt='Hisense'
								width={150}
								height={60}
							/>
						</a>
					</Link>
					<Link href={LINKS.ANDROIDTV}>
						<a>
							<img
								src='/images/smart/androidTV.png'
								alt='Hisense'
								width={80}
								height={60}
							/>
						</a>
					</Link>
					<Link href={LINKS.DUNE}>
						<a>
							<img
								src='/images/smart/dune.png'
								alt='Hisense'
								width={80}
								height={60}
							/>
						</a>
					</Link>

				</div>
			</div>
			<div>
				<Subheading title={'Мы в соцсетях'} />
				<div className={cn(styles.stores, styles.ss)}>
					<Link href={LINKS.VK}>
						<a>
							<FaVk />
						</a>
					</Link>
					<Link href={LINKS.INSTAGRAM}>
						<a>
							<FaInstagram />
						</a>
					</Link>
					<Link href={LINKS.VIBER}>
						<a>
							<FaViber />
						</a>
					</Link>
					<Link href={LINKS.TELEGRAM}>
						<a>
							<FaTelegramPlane />
						</a>
					</Link>
					<Link href={LINKS.FACEBOOK}>
						<a>
							<FaFacebookF />
						</a>
					</Link>
					<Link href={LINKS.OK}>
						<a>
							<FaOdnoklassniki />
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SocialLinks
