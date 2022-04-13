import cn from 'classnames'
import { FC, forwardRef } from 'react'

import { IField } from './form.interfaces'

import styles from 'form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }) => {
		return <div className={cn(styles.common, styles.field)} style={style}></div>
	}
)

Field.displayName = 'Field'
export default Field
