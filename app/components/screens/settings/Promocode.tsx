import { FC } from 'react'

import Button from '../../ui/form-elemets/Button'
import Field from '../../ui/form-elemets/Field'
import Heading from '../../ui/heading/Heading'

import styles from './settings.module.scss'

const Promocode: FC = () => {
	return (
		<div>
			<Heading title={'АКТИВАЦИЯ ПРОМОКОДА'} className="mb-5" />
			<div className={styles.card}>
				<Field placeholder={'введите промокод'} size={30} />
				<Button className={'w-full'}>Проверить</Button>
			</div>
		</div>
	)
}

export default Promocode
