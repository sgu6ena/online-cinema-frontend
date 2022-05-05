import { FC, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import styles from './Slider.module.scss'
import { ISlide } from './slider.interface'
import { useSlider } from './useSlider'

interface ISlider {
	slides: ISlide[]
	buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const { handleClick, index, slideIn } = useSlider(slides.length)
	useEffect(() => {
		const myTimeout = setTimeout(() => {
			handleClick('next')
		}, 5000)
	}, [index])

	return (
		<div className={styles.slider}>
			<CSSTransition in={slideIn} timeout={300} classNames="slide-animation">
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>
			<SlideArrow variant="left" clickHandler={() => handleClick('prev')} />
			<SlideArrow variant="right" clickHandler={() => handleClick('next')} />
		</div>
	)
}

export default Slider