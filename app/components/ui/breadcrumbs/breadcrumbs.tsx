import { FC } from 'react'
import Link from 'next/link'
import styles from './breadcrumbs.module.scss'
interface IBreadcrumb {
	title?: string
	to?: string
}

const Breadcrumbs: FC<{ breadcrumbs:IBreadcrumb[] }> = ({ breadcrumbs }) => {
	return (
		<div className={styles.line}>
			<Link href='/'><a>Главная</a></Link>
			{breadcrumbs
				.map(item => <><span> / </span><Link href={item.to||'#'}><a>{item.title}</a></Link></> )}
		</div>
	)
}

export default Breadcrumbs