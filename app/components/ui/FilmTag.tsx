import { FC } from 'react'

const FilmTag: FC<{ type: 0 | 1 | 2 }> = ({ type = 1 }) => {
	return (
		<span
			className={
				type === 1
					? 'bg-primary rounded text-white p-1 px-2'
					: type === 0
					? 'bg-white rounded text-black p-1 px-2'
					: ''
			}
		>
			{type === 1 ? 'по подписке' : type === 0 ? 'бесплатный' : ''}
		</span>
	)
}

export default FilmTag
