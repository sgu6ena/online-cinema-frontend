import React from 'react'
import SkeletonLoader from '../ui/SkeletonLoader'
import styles from './loaders.module.scss'

const CatalogLoader = () => {
	return (

			<div className={styles.container}>
				<SkeletonLoader className={styles.item} />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item} />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
				<SkeletonLoader className={styles.item}  />
			</div>

	)
}

export default CatalogLoader