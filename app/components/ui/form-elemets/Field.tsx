import cn from 'classnames';
import { forwardRef, ChangeEvent } from 'react';

import { IField } from './form.interfaces';
import styles from './form.module.scss';

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', className, style, onChange, ...rest }, ref) => {
		const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
			if (onChange) {
				onChange(event);
			}
		};

		return (
			<div className={cn(styles.common, styles.field, className)} style={style}>
				<label className={type === 'file' ? styles.filelabel:'' }>
					<span>{placeholder}</span>
					{type === 'file' ? (
						<input type={type} ref={ref} onChange={handleChange} {...rest} />
					) : (
						<input type={type} ref={ref} onChange={handleChange}  autoComplete="off"   {...rest}  />
					)}
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		);
	}
);

Field.displayName = 'Field';

export default Field;