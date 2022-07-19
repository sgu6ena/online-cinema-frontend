import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect, } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '../../../hooks/useActions'
import { useSearch } from '../../../hooks/useSearchFilters'
import { IList } from '../../../shared/types/seaarch.types'
import Pagination from '../../ui/Pagination'
import Button from '../../ui/form-elemets/Button'
import Field from '../../ui/form-elemets/Field'
import GaleryPortal from '../../ui/gallery/GaleryPortal'
import Heading from '../../ui/heading/Heading'
import logo from '../../layout/Header/Logo'

const DynamicSelect = dynamic(
	() => import('../../ui/form-elemets/select/Select'),
	{
		ssr: false,
	}
)

const toSelect = (items: IList[] = []) => {
	return [
		...items.map((item) => ({ value: item.id.toString(), label: item.name })),
	]
}

const Search: FC = () => {
	const { getSearchParameters, getSearch } = useActions()
	const {
		isLoading,
		genre,
		country,
		category,
		year,
		sort,
		type_content,
		movies,
		pagination,
	} = useSearch()

	const { handleSubmit, control, register, getValues} = useForm({
		mode: 'onChange',
	})
	const { query } = useRouter()

	let page = query.page
		? query.page.toString() || query.page[0].toString() : '1'

	const onSubmit: SubmitHandler<any> = (data) => {

		const params = {
			title: data.query || '',
			genre: data.genres || '',
			country: data.country || '',
			category: data.category || '',
			sort: data.sort || '',
			year: data.year || '',
			type_content: data.type_content || '',
			page
		}
		getSearch(params)
	}

	useEffect(() => {
		getSearchParameters()
	}, [])

	useEffect(() => {
		onSubmit(getValues())
	}, [page, query])
	useEffect(() => {

	}, [pagination])
	return (
		<div className="m-10">
			<Heading title={'Поиск'} className={'my-10'} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={'flex  items-center  '}>
					<div className={'w-full px-2'}>
						<Field {...register('query')} placeholder={'Поиск '} />
					</div>
					<div className={'w-full px-2'}>
						<Controller
							name="genres"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Жанры"
									options={toSelect(genre)}
									isLoading={isLoading}
									// isMulti
								/>
							)}
						/>
					</div>
					<div className={'w-full px-2'}>
						<Controller
							name="country"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Страны"
									options={toSelect(country)}
									isLoading={isLoading}
									// isMulti
								/>
							)}
						/>
					</div>

					{/*<div className={'w-full px-2'}>*/}
					{/*	<Controller*/}
					{/*		name="category"*/}
					{/*		control={control}*/}
					{/*		render={({ field, fieldState: { error } }) => (*/}
					{/*			<DynamicSelect*/}
					{/*				error={error}*/}
					{/*				field={field}*/}
					{/*				placeholder="Категории"*/}
					{/*				options={toSelect(category)}*/}
					{/*				isLoading={isLoading}*/}
					{/*			/>*/}
					{/*		)}*/}
					{/*	/>*/}
					{/*</div>*/}

					<div className={'w-full max-w-[160px] px-2'}>
						<Controller
							name="year"
							control={control}
							defaultValue={{ value: '1' }}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Год"
									options={toSelect(year)}
									isLoading={isLoading}
								/>
							)}
						/>
					</div>
					<div className={'w-full max-w-[200px] px-2'}>
						<Controller
							name="sort"
							control={control}
							// defaultValue={{ value: '1' }}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Сортировка по"
									options={toSelect(sort)}
									isLoading={isLoading}
								/>
							)}
						/>
					</div>
					<div className={'w-full max-w-[160px] px-2'}>
						<Controller
							name="type_content"
							control={control}
							// defaultValue={{ value: '0' }}
							render={({ field
												 , fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Тип контента"
									options={toSelect(type_content)}
									isLoading={isLoading}
								/>
							)}
						/>
					</div>

				</div>
				<Button className={''}>Поиск</Button>
			</form>
			<>
				<GaleryPortal movies={movies || []} />
				{pagination && pagination.totalPages > 1 && (
					<Pagination pagination={pagination}  />
				)}
			</>
		</div>
	)
}

export default Search
