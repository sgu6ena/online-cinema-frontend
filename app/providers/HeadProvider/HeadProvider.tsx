import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import React, { FC } from 'react'

import { accentColor } from '../../config/constants'

import Favicons from './Favicons'

const HeadProvider: FC = ({ children }) => {
	return (
		<>
			<NextNProgress
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={4}
			/>
			<Head>
				<meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.8"
				/>
				<Favicons />
				<meta name="theme-color" content="#18181E" />
				<meta name="msapplication-navbutton-color" content="#18181E" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#18181E" />
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
