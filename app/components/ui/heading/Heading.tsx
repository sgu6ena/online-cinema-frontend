import { FC } from 'react'

interface IHeading {
	title: string
	className?: string
}

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<h1
			className={`text-white text-opacity-80 font-semibold ${
				className?.includes('xl') ||className?.includes('xs') ||className?.includes('sm')||className?.includes('lg') ? '' : 'lg:text-3xl md:text-2xl text-xl'
			} ${className}`}
		>
			{title}
		</h1>
	)
}

export default Heading
