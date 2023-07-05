import Field from '@/ui/form-elemets/Field'
import Button from '@/ui/form-elemets/Button'
import {  useGenre } from '@/screens/admin/genres/useGenre'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Heading from '@/ui/heading/Heading'

const Create = () => {
	const { query } = useRouter()
	const genreId = query.id && String(query.id)
	const {  createAsync, isLoadingCreate } = useGenre(genreId as string)

	const { handleSubmit, formState, register } = useForm({
		mode: 'onSubmit',
	})

	const onSave = async (data: any) => {
		await createAsync(data)
	}

	return (
		<div className={'p-layout'}>
			<div className={'flex justify-between gap-4 mb-2'}>
				<div className={'flex flex-col gap-4 mb-1'}>
					<Heading title={'Создание жанра/подборки'} />

				</div>
			</div>


				<form onSubmit={handleSubmit(onSave)}>
					<div className={'flex mb-8 gap-4'}>

						<Field {...register('file')} type={'file'} placeholder={'загрузить картинку '} />
					</div>

					<div className={'flex gap-4'}>
						<Field className={"w-80"} {...register('name')} placeholder={'название подборки '} />
						<Field className={"w-80"} {...register('description')} type={'textarea'}  placeholder={'описание '} />
						<Field className={"w-80"} {...register('sort')}  placeholder={'Cортировка'} />
					</div>


					<div className={'flex  gap-4 my-1'}>
						<Button type='submit' disabled={!formState.isValid || isLoadingCreate}>
							Сохранить изменения
						</Button>
						<Button style={{ background: 'darkgray' }}>Отмена</Button>
					</div>
				</form>

		</div>
	)
}

export default Create