import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Meta from '../../../../utils/meta/Meta'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import Field from '../../../ui/form-elemets/Field'
import Heading from '../../../ui/heading/Heading'

import { IGenreEditInput } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'

import styles from 'GenreEdit.module.scss'

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IGenreEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useGenreEdit(setValue)
	return (
		<Meta title="Редактирование жанра">
			<AdminNavigation />
			<Heading title={'Редактирование жанра'} />
			<form onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div>
							<Field
								{...register('name', {
									required: 'Название жанра обязательно!',
								})}
								placeholder="Название жанра"
								error={errors.name}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('icon', {
									required: 'Иконка для жанра обязательна!',
								})}
								placeholder="Иконка для жанра"
								error={errors.icon}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('slug', {
									required: 'URL для жанра обязательно!',
								})}
								placeholder="URL для жанра"
								error={errors.slug}
								style={{ width: '31%' }}
							/>

							{/*	Text editor*/}

							<button>Обновить</button>
						</div>
					</>
				)}
			</form>
		</Meta>
	)
}

export default GenreEdit
