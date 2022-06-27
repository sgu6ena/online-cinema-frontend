import styles from './loaders.module.scss'
import SkeletonLoader from '../ui/SkeletonLoader'
import React from 'react'

export const SliderMovieBlock = () => (<>
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