import Head from 'next/head'
import {useRouter} from 'next/router'
import {FC} from 'react'

import {siteName, titleMerge} from '../../config/seo.config'
import {onlyText} from '../string/clearText'

import {ISeo} from './meta.interface'

const Meta: FC<ISeo> = ({
							title,
							image,
							description,
							children
						}) => {
	const {asPath} = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)} </title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				{/*@ts-ignore*/}
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link href="https://fonts.googleapis.com/css2?family=Allan:wght@400;700&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Oswald:wght@200;300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
				{description ? (
					<>
						<meta
							itemProp="description"
							name="description"
							content={onlyText(description, 152)}
						/>
						<link rel="canonical" href={currentUrl}/>
						<meta property="og:locale" content="ru_RU"/>
						<meta property="og:title" content={titleMerge(title)}/>
						<meta property="og:url" content={currentUrl}/>
						<meta property="og:image" content={image || '/svg/logo/logo.svg'}/>
						<meta property="og:site_name" content={siteName}/>
						<meta name="yandex-verification" content="f6c9fa9dafb25c11" />
						<meta
							property="og:description"
							content={onlyText(description, 197)}
						/>
					</>
				) : (
					<meta name="robots" content="noindex, nofollow"/>
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
