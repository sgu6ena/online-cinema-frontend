import { FC, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import styles from './Slider.module.scss'
import { ISlide } from './slider.interface'
import { useSlider } from './useSlider'
import SlideIndicator from './SlideArrow/slideIndicator'

interface ISlider {
	slides: ISlide[]
	buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
	const { handleClick, index, slideIn } = useSlider(slides.length)

	return (
		<div className={styles.slider}>
			<CSSTransition in={slideIn} timeout={300} classNames="slide-animation">
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>
			<SlideArrow variant="left" clickHandler={() => handleClick('prev')} />
			<SlideArrow variant="right" clickHandler={() => handleClick('next')} />
			<SlideIndicator count={slides.length} activeNumber={index}/>
		</div>
	)
}

export default Slider
