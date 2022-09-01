import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Appstore from '../../../assets/svg/appstore.svg'
import GooglePlay from '../../../assets/svg/googleplay.svg'
import Hisense from '../../../assets/svg/hisense.svg'
import Huawei from '../../../assets/svg/huawei.svg'
import Lg from '../../../assets/svg/lg.svg'
import Mibox from '../../../assets/svg/mibox.svg'
import Samsung from '../../../assets/svg/samsung.svg'
import { LINKS } from '../../../config/links'
import Subheading from '../../ui/heading/Subheading'

import styles from './footer.module.scss'
import MaterialIcon from '../../ui/MaterialIcon'
import {
	FaFacebook,
	FaFacebookF,
	FaInstagram,
	FaOdnoklassniki,
	FaTelegram,
	FaTelegramPlane,
	FaViber,
	FaVk,
} from 'react-icons/fa'
import cn from 'classnames'

const SocialLinks: FC = () => {
	return (
		<div className={styles.links}>
			<div className={styles.stores}>
				<Link href={LINKS.APPSTORE}>
					<a>
						<Image src={Appstore} alt='Appstore' width={204} height={60} />
					</a>
				</Link>
				<Link href={LINKS.GOOGLEPLAY}>
					<a>
						<Image src={GooglePlay} alt='GOOGLEPLAY' width={204} height={60} />
					</a>
				</Link>
				<Link href={LINKS.APPGALLERY}>
					<a>
						<Image src={Huawei} alt='APPGALLERY' width={204} height={60} />
					</a>
				</Link>
			</div>
			<div>
				<Subheading title={'PORTAL на большом экране'} />
				<div className={styles.stores}>

					<Link href={LINKS.APPSTORE}>
						<a>
							<Image src={Samsung} alt="Appstore" width={150} height={60} />
						</a>
					</Link>
					<Link href={LINKS.APPSTORE}>
						<a>
							<Image src={Lg} alt="Appstore" width={150} height={60} />
						</a>
					</Link>
					<Link href={LINKS.APPSTORE}>
						<a>
							<Image src={Hisense} alt="Appstore" width={150} height={60} />
						</a>
					</Link>
					<Link href={LINKS.APPSTORE}>
						<a>
							<Image src={Mibox} alt="Appstore" width={150} height={60} />
						</a>
					</Link>
				</div>
			</div>
			<div>
			<Subheading title={'Мы в соцсетях'} />
				<div className={cn(styles.stores, styles.ss )}>
				<Link href={LINKS.VK}>
					<a>
						<FaVk/>
					</a>
				</Link>
				<Link href={LINKS.INSTAGRAM}>
					<a>
						<FaInstagram/>
					</a>
				</Link>
				<Link href={LINKS.VIBER}>
					<a>
						<FaViber/>
					</a>
				</Link>
				<Link href={LINKS.TELEGRAM}>
					<a>
						<FaTelegramPlane/>
					</a>
				</Link>
				<Link href={LINKS.FACEBOOK}>
					<a>
						<FaFacebookF/>
					</a>
				</Link>
				<Link href={LINKS.OK}>
					<a>
						<FaOdnoklassniki/>
					</a>
				</Link></div>
			</div>
		</div>
	)
}

export default SocialLinks
