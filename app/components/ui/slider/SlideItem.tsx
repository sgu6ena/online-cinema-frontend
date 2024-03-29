import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Slider.module.scss'
import { ISlide } from './slider.interface'
import Link from 'next/link'

interface ISlideItem {
	slide: ISlide
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Смотреть' }) => {
	const {push} = useRouter()
	return (
		<div className={styles.slide}>
			{slide?.bigPoster && (
				<Link href={slide.link}>
					<a>
						<img
							className={styles.image}
							src={slide.bigPoster}
							alt={slide.title}
							draggable={false}
						/>
					</a>
				</Link>
			)}

			<div className={styles.content}>
				{/*<div className={styles.heading}>{slide.title}</div>*/}
				{/*<div className={styles.subHeading}>{slide.subTitle}</div>*/}
				<button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	)
}

export default SlideItem
