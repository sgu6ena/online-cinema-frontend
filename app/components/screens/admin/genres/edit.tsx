import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'

import Field from '../../../ui/form-elemets/Field'
import Heading from '../../../ui/heading/Heading'
import Subheading from '../../../ui/heading/Subheading'
import { GenreFormData, useGenre } from '@/screens/admin/genres/useGenre'
import Button from '@/ui/form-elemets/Button'
import Image from 'next/image'

const GenreEdit: FC = () => {
	const { query } = useRouter()
	const genreId = query.id && String(query.id)
	const { genre, isLoading, updateAsync } = useGenre(genreId as string)

	const { handleSubmit, formState, register } = useForm({
		mode: 'onChange',
	})

	const onSave = async (data: any) => {
		await updateAsync(data as GenreFormData)
	}
	useEffect(() => {
	}, [genre])

	return (
		<div className={'p-layout'}>
			<div className={'flex justify-between gap-4 mb-2'}>
				<div className={'flex flex-col gap-4 mb-1'}>
					<Heading title={'Редактирование жанра/подборки'} />
					<Subheading title={genre?.name || ''} />
				</div>
			</div>

			{isLoading ? <p>загрузка...</p> :
				<form onSubmit={handleSubmit(onSave)}>
					<div className={'flex mb-8 gap-4'}>
						<img src={`//portal.idc.md/img/mov-selec/${genreId}.jpg`} alt='' height={300} width={300} />

						<Field {...register('file')} type={'file'} placeholder={'загрузить картинку '} />
					</div>

					<div className={'flex gap-4'}>
						<Field className={"w-80"} {...register('name')} defaultValue={genre?.name} placeholder={'название подборки '} />
						<Field className={"w-80"} {...register('description')} type={'textarea'} defaultValue={genre?.description} placeholder={'описание '} />
						<Field className={"w-80"} {...register('sort')} defaultValue={genre?.sort} placeholder={'Cортировка '} />
					</div>


					<div className={'flex  gap-4 my-1'}>
						<Button type='submit' disabled={!formState.isValid}>
							Сохранить изменения
						</Button>
						<Button style={{ background: 'darkgray' }}>Отмена</Button>
					</div>
				</form>
			}
		</div>
	)
}

export default GenreEdit