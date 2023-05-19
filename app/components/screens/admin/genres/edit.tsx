import { FC } from 'react'
import { useRouter } from 'next/router'

import Field from '../../../ui/form-elemets/Field'
import Heading from '../../../ui/heading/Heading'
import Subheading from '../../../ui/heading/Subheading'
import { useGenre } from '@/screens/admin/genres/useGenre'
import BaseReactPlayer from 'react-player/base'
import Button from '@/ui/form-elemets/Button'
import { useForm } from 'react-hook-form'

const GenreEdit: FC = () => {
	const { query } = useRouter()
	const genreId = query.id && String(query.id)
	const { genre, isLoading,createAsync } = useGenre(genreId as string)

	const { formState, getValues, handleSubmit} =
		useForm({
			mode: 'onChange',
		})

	const onSave = async () => {
		console.log(getValues())
		// await createAsync({id:Number(genreId),name:'Пасхальная неделя', sort:-1, description:'Пасхальная неделя'})
		}
	return (
		<div className={'p-layout'}>
			<div className={'flex justify-between gap-4 mb-2'}>
				<div className={'flex flex-col gap-4 mb-1'}>
					<Heading title={'Редактирование жанра/подборки'} />
					<Subheading title={genre?.name || ''} /></div>
			</div>
			<form onSubmit={()=>handleSubmit}>
			<Field placeholder={'название подборки'} type={'text'} defaultValue={genre?.name || ''} />
			<Field placeholder={'описание'} type={'textarea'}  defaultValue={genre?.description || ''} />
			<Field placeholder={'сортировка ( 0 - Не Отображать На Главной, -1 Скрыть Из Списков)'} type={'text'}
						 defaultValue={genre?.sort || ''} />
			</form>
			<div className={'flex  gap-4 my-1'}>
				<Button onClick={onSave}>Сохранить изменения</Button>
				<Button style={{ background: 'darkgray' }}>Отмена</Button>
			</div>
		</div>
	)
}

export default GenreEdit