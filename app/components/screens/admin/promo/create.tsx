import Field from '@/ui/form-elemets/Field'
import Button from '@/ui/form-elemets/Button'

import { Controller, useForm } from 'react-hook-form'
import Heading from '@/ui/heading/Heading'
import { useNewPromos } from '@/screens/admin/promo/useNewPromos'

import dynamic from 'next/dynamic'
const DynamicSelect = dynamic(
	() => import('@/ui/form-elemets/select/Select'),
	{
		ssr: false,
	}
)

const Create = () => {


	const {  updateAsync, isLoading, packets,packetsLoading } = useNewPromos()

	const { handleSubmit, formState, register, control } = useForm({
		mode: 'all',
	})

	const onSave = async (data: any) => {
		await updateAsync(data)
	}

	return (
		<div className={'p-layout'}>
			<div className={'flex justify-between gap-4 mb-2'}>
				<div className={'flex flex-col gap-4 mb-1'}>
					<Heading title={'Создание промокодов'} />

				</div>
			</div>


			<form onSubmit={handleSubmit(onSave)}>

				<div className={'flex my-20 gap-4'}>
					<Field className={"w-40"} type={'number'} {...register('count')} placeholder={'количество кодов '} />

					<Field className={"w-96"} type={'date'} {...register('time_expired')}  placeholder={'время окончания промокода'} />
					<Controller
					name="tariff_id"
					control={control}
					defaultValue={'1'}
					render={({ field, fieldState: { error } }) => (
						<DynamicSelect

							error={error}
							field={field}
							placeholder="Вид скидки"
							options={packets||[]}
							isLoading={packetsLoading}
						/>
					)}
				/>
				</div>


				<div className={'flex  gap-4 my-1'}>
					<Button type='submit' disabled={!formState.isValid || isLoading}>
						Сохранить изменения
					</Button>
					<Button style={{ background: 'darkgray' }}>Отмена</Button>
				</div>
			</form>

		</div>
	)
}

export default Create