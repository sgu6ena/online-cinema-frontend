import { FC } from 'react'

import Heading from '../../../ui/heading/Heading'
import Field from '../../../ui/form-elemets/Field'
import Button from '../../../ui/form-elemets/Button'
import styles from '../settings.module.scss'
import { useActions } from '../../../../hooks/useActions'
import { SubmitHandler, useForm } from 'react-hook-form'

const Devices: FC = () => {
	const { smartActive } = useActions()
	const { register, handleSubmit } = useForm({
		mode: 'onChange',
	})
	const onSubmit: SubmitHandler<any> = (data) => {
		console.log(data.code )
		smartActive(data.code)
	}

	return (
		<div>
			<Heading title={'УСТРОЙСТВА'} className="mb-5" />
				<form className={styles.card} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('code', {
							required: 'Обязательное поле',
						})}
						placeholder="Введите код с экрана телевизора "
						size={30}
					/>
					<Button className={'w-full'} type={'submit'}>Подключить портал на ТВ</Button>
				</form>
			</div>
	)
}

export default Devices


