import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { useActions } from '@/hooks/useActions'
import { useSearch } from '@/hooks/useSearchFilters'
import { IList } from '@/shared/types/search.types'
import MaterialIcon from '../../ui/MaterialIcon'
import Field from '../../ui/form-elemets/Field'
import Gallery from '../../ui/gallery/Gallery'
import Heading from '../../ui/heading/Heading'
import ShowMore from '../../ui/showMore/showMore'

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
		isLoadingFilters,
		genre,
		country,
		year,
		sort,
		type_content,
		movies,
		pagination,
	} = useSearch()

	const { handleSubmit, control, register, getValues, watch, formState } =
		useForm({
			mode: 'onChange',
		})

	const [page, setPage] = useState(1)


	const onSubmit: SubmitHandler<any> = (data) => {
		const params = {
			title: data.query || '',
			genre: data.genres?.join('|') || '',
			//	genre:'39',
			country: data.country?.join('|') || '',
			category: data.category || '',
			sort: data.sort || '',
			year: data.year || '',
			type_content: data.type_content || '',
			page,
		}
		//@ts-ignore
		getSearch(params)
	}

	useEffect(() => {
		getSearchParameters()
	}, [])

	useEffect(() => {
		onSubmit(getValues())
	}, [page])

	return (
		<div className="md:px-5 px-3 lg:pl-layout">
			<Heading title={'Поиск'} className={'my-10'} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={'flex items-end md:flex-row flex-col   '}>
					<div className={'w-full  md:max-w-[300px] px-2'}>
						<Field {...register('query')} placeholder={'Поиск '} />
					</div>
					<div className={'w-full  px-2'}>
						<Controller
							name="genres"
							control={control}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Жанры"
									options={toSelect(genre)}
									isLoading={isLoadingFilters}
									isMulti
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
									isLoading={isLoadingFilters}
									isMulti
								/>
							)}
						/>
					</div>
					<div className={'w-full  md:max-w-[260px] px-2'}>
						<Controller
							name="year"
							control={control}
							defaultValue={'1'}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Год"
									options={toSelect(year)}
									isLoading={isLoadingFilters}
								/>
							)}
						/>
					</div>
					<div className={'w-full  md:max-w-[280px] px-2'}>
						<Controller
							name="sort"
							control={control}
							defaultValue={'1'}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Сортировка по"
									options={toSelect(sort)}
									isLoading={isLoadingFilters}
								/>
							)}
						/>
					</div>
					<div className={'w-full md:max-w-[260px] px-2'}>
						<Controller
							name="type_content"
							defaultValue={'-1'}
							control={control}
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									error={error}
									field={field}
									placeholder="Тип контента"
									options={toSelect(type_content)}
									isLoading={isLoadingFilters}
								/>
							)}
						/>
					</div>
					<button
						className={
							'self-center btn-primary p-3 mb-2 md:w-20 w-full flex gap-3 justify-center items-center'
						}
					>
						<MaterialIcon name={'MdSearch'} />
						<span className={'md:hidden'}>Найти</span>
					</button>
				</div>
			</form>
			<Gallery movies={movies || []} />
			{pagination && (
				<ShowMore
					totalPages={pagination?.totalPages}
					setPage={setPage}
					page={page}
				/>
			)}
		</div>
	)
}

export default Search
