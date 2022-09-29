import { FC, useEffect, useState } from 'react'

import { Controller, useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'
import { useActions } from '../../../hooks/useActions'
import { useSearch } from '../../../hooks/useSearchFilters'

const DynamicSelect = dynamic(
	() => import('../../ui/form-elemets/select/Select'),
	{
		ssr: false,
	},
)

const SortByYear: FC<{ sortId: string, onChange: any }> = ({ sortId=1, onChange }) => {
	const { getSearchParameters } = useActions()
	const {year}=useSearch()
	useEffect(()=>{
		getSearchParameters()
	},[])

	const sort = year.map(item=>({value:item.id.toString(), label:item.name}))


	const { control, watch } = useForm({
		mode: 'onChange',
	})

	const [value, setValue] = useState(sortId)
	const submit = () => {
		const sort = watch('sort')
		if (value !== sort) {
			setValue(sort)
			onChange(sort)
		}
	}

	return (
		<form onClick={submit}>
			<div className={'w-full w-[120px] px-2 -mb-4'}>
				<Controller
					defaultValue={sort[0]}
					name='sort'
					control={control}
					render={({ field, fieldState: { error } }) => (
						<DynamicSelect
							error={error}
							field={field}
							placeholder=''
							options={sort}
						/>
					)}
				/>
			</div>
		</form>
	)

}

export default SortByYear