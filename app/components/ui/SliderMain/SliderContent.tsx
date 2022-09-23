import cn from 'classnames'
import Link from 'next/link'
import React, { FC } from 'react'

import MaterialIcon from '../MaterialIcon'
import { ISlide } from '../slider/slider.interface'

import styles from './slider.module.scss'
import { getGenreUrl } from '../../../config/url.config'

const SliderContent: FC<{ slideData: ISlide }> = ({ slideData: i }) => {
	return (
		<div className={styles.slide}>
			<img
				data-src={i.bigPoster + ''}
				src={i.bigPoster + ''}
				alt={i.title}
				className={cn(styles.img, '')}
			/>
			{/*<div className="swiper-lazy-preloader"></div>*/}
			<div className={styles.content}>
				<h3 className={cn(styles.title)}>
					{i.title.toUpperCase()}
				</h3>
				{/*<div  className={styles.subtitle}>*/}
				{/*	{i.subTitle}*/}
				{/*</div>*/}
				<div className={styles.genres}>
					<div>{i.year}</div>
					{i.genres &&i.genres.map((genre) => (
						<>
							<span>·</span>
							<Link href={getGenreUrl(genre.id)}>
								<a>{genre.name}</a>
							</Link>
						</>
					))}

					{i.rate_age&&<><div>·</div>
						<div>{i.rate_age}</div></>}
				</div>
				<div className={styles.buttons}>
					<Link href={i.link}>
						<a>
							<div className={styles.show}>
								<MaterialIcon name={'MdOutlinePlayArrow'} />
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
