import { FC } from 'react'

import Button from '../../../ui/form-elemets/Button'
import Field from '../../../ui/form-elemets/Field'
import Heading from '../../../ui/heading/Heading'
import styles from '../settings.module.scss'
import { useActions } from '../../../../hooks/useActions'
import { SubmitHandler, useForm } from 'react-hook-form'

const Promocode: FC = () => {

	const { promocode } = useActions()
	const { register, handleSubmit } = useForm({
		mode: 'onChange',
	})
	const onSubmit: SubmitHandler<any> = (data) => {
		promocode(data.code)
	}
	return (
		<div>
			<Heading title={'АКТИВАЦИЯ ПРОМОКОДА'} className="mb-5" />
			<form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('code', {
						required: 'Обязательное поле',
					})}
					placeholder="введите промокод "
					size={30}
				/>
				<Button className={'w-full'}>Проверить</Button>
			</form>
		</div>
	)
}

export default Promocode
