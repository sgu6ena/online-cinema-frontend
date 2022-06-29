import { FC, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Heading from '../../ui/heading/Heading'
import Button from '../../ui/form-elemets/Button'
import { useSearch } from '../../../hooks/useSearchFilters'
import { useActions } from '../../../hooks/useActions'

const DynamicSelect = dynamic(() => import('../../ui/form-elemets/select/Select'), {
	ssr: false,
})

const Search: FC = () => {
	const genres = [{ label: 'жанр 1', value: 'значение1' }, { label: 'жанр 2', value: 'значение2' }, {
		label: 'жанр 3',
		value: 'значение3',
	}, { label: 'жанр 4', value: 'значение4' }]

	const { getSearchParameters } = useActions()
	const { isLoading } = useSearch()
	const {
		handleSubmit,
		control,
	} = useForm({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<any> = (data) => {
		console.log(data)
	}

	useEffect(() => {
		getSearchParameters()
		console.log('старт')

	}, [])


	return (<div className='m-10'>
			{isLoading}
			<Heading title={'Поиск'} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={'w-60'}>
					<Controller
						name='genres'
						control={control}
						render={({ field, fieldState: { error } }) => (
							<DynamicSelect
								error={error}
								field={field}
								placeholder='Жанры'
								options={genres || []}
								isLoading={isLoading}
							/>
						)}
					/>
				</div>
				<Button>Тест</Button>
			</form>
		</div>
	)
}

export default Search