import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'

import MaterialIcon from '../MaterialIcon'
import { ISlide } from '../slider/slider.interface'

import styles from './slider.module.scss'

const SliderContent: FC<{ slideData: ISlide }> = ({ slideData: i }) => {
	return (
		<div className={styles.slide}>
			<img
				data-src={i.bigPoster + ''}
				alt={i.title}
				className={cn(styles.img, 'swiper-lazy')}
			/>
			<div className="swiper-lazy-preloader"></div>
			<div className={styles.content}>
				<h3 className={styles.title}>
					{'Очень Интересное кино c длинным названием'.toUpperCase()}
				</h3>
				<div className={styles.subtitle}>
					<div>2021</div>
					<div>·</div>
					<div>Боевик</div>
					<div>·</div>
					<div>Мелодрама</div>
					<div>·</div>
					<div>16+</div>
				</div>
				<div className={styles.buttons}>
					<Link href={i.link}>
						<a>
							<div className={styles.show}>
								<MaterialIcon name={'MdPlayArrow'} />
								<div>Смотреть</div>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SliderContent
