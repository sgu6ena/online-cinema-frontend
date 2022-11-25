import Link from 'next/link'
import { FC, Fragment } from 'react'

import styles from './breadcrumbs.module.scss'

interface IBreadcrumb {
	title?: string
	to?: string
}

const Breadcrumbs: FC<{ breadcrumbs: IBreadcrumb[] }> = ({ breadcrumbs }) => {
	return (
		<div className={styles.line}>
			<Link href='/'>
				<a>Главная</a>
			</Link>
			{breadcrumbs.map((item, index) => (
				<Fragment key={index}>
					<span> / </span>
					<Link href={item.to || '#'}>
						<a>{item.title}</a>
					</Link>
				</Fragment>
			))}
		</div>
	)
}

export default Breadcrumbs
