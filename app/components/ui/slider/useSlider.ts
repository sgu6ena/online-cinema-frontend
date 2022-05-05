import { useState } from 'react'

export const useSlider = (length: number) => {
	const [currentIdx, setCurrentIdx] = useState(0)
	const [slideIn, setSlideIn] = useState(true)

	const handleArrowClick = (direction: 'next' | 'prev') => {
		const newIndex =
			direction === 'next'
				? currentIdx + 1 < length
					? currentIdx + 1
					: 0
				: currentIdx - 1 > 0
				? currentIdx - 1
				: length

		setSlideIn(false)

		setTimeout(() => {
			setCurrentIdx(newIndex)
			setSlideIn(true)
		}, 300)
	}

	return {
		slideIn,
		index: currentIdx,
		handleClick: handleArrowClick,
	}
}
