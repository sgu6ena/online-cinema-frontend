import { value } from 'dom7'
import dynamic from 'next/dynamic'
import { FC, useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '../../../hooks/useActions'
import { useSearch } from '../../../hooks/useSearchFilters'
import { IList, IListFilter } from '../../../shared/types/seaarch.types'
import Button from '../../ui/form-elemets/Button'
import Heading from '../../ui/heading/Heading'

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
	const { isLoading, genre, country, category, year, sort, type_content } =
		useSearch()
	const { handleSubmit, control } = useForm({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<any> = (data) => {
		console.log(data.category)
		const params = {
			genre: data.genres[0] || '',
			country: data.country[0]|| '',
			category: data.category || '',
			sort: data.sort.value || '',
			year: data.year.value || '',
			type_content: data.type_content.value || '',

		}

		console.log(params)
		getSearch(params)
	}

	useEffect(() => {
		getSearchParameters()
	}, [])

	return (
		<div className="m-10">
			<Heading title={'Поиск'} className={'my-10'} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={'flex flex-wrap  '}>
					<div className={'w-1/2 p-2'}>
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
									isMulti
								/>
							)}
						/>
					</div>
					<div className={'w-1/2 p-2'}>
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
									isMulti
								/>
							)}
						/>
					</div>
					<div className={'w-1/4 p-2'}>
						<Controller
							name="category"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Категории"
									options={toSelect(category)}
									isLoading={isLoading}
								/>
							)}
						/>
					</div>

					<div className={'w-1/4 p-2'}>
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
					<div className={'w-1/4 p-2'}>
						<Controller
							name="sort"
							control={control}
							defaultValue={{ value: '1' }}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Сортировка"
									options={toSelect(sort)}
									isLoading={isLoading}
								/>
							)}
						/>
					</div>
					<div className={'w-1/4 p-2'}>
						<Controller
							name="type_content"
							control={control}
							defaultValue={{ value: '1' }}
							render={({ field, fieldState: { error } }) => (
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
				<Button>Тест</Button>
			</form>
		</div>
	)
}

export default Search
