import React from 'react'

import SkeletonLoader from '../ui/SkeletonLoader'
import styles from './loaders.module.scss'

const Block = () => (<>
	<div className={styles.titleContainer}>
		<SkeletonLoader className={styles.title} />
		<SkeletonLoader className={styles.button} />
	</div>
	<div className={styles.mainContainer}>
		<SkeletonLoader className={styles.item} />
		<SkeletonLoader className={styles.item} />
		<SkeletonLoader className={styles.item} />
		<SkeletonLoader className={styles.item} />
		<SkeletonLoader className={styles.item} />
		<SkeletonLoader className={styles.item} />
		<SkeletonLoader className={styles.item} />
		<SkeletonLoader className={styles.item} />
	</div>
</>)

const HomeLoading = () => {
	return (
		<div className={'overflow-hidden'}>
			<SkeletonLoader className={styles.mainBanner} />
			<div className='px-layout '>
				<Block />
				<Block />
				<Block />
				<Block />
				<Block />
			</div>
		</div>
	)
}

export default HomeLoading
