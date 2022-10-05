import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IList } from '../../../shared/types/search.types'
import Select from '../form-elemets/select/Select'


const SortBy: FC<{ sortId: string; onChange: any; options: IList[]; title?: string; isMulti?: boolean }> = ({
																																																							sortId,
																																																							onChange,
																																																							options,
																																																							title,
																																																							isMulti = false,
																																																						}) => {

	const sort = options.map((item) => ({
		value: item.id.toString(),
		label: item.name,
	}))

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
	useEffect(() => {
	}, [options.length])
	return (
		<form onClick={submit} className={'lg:w-60  w-full'}>
			<div className={'w-full'}>
				<Controller
					defaultValue={sortId}
					name='sort'
					control={control}
					render={({ field, fieldState: { error } }) => (
						<Select
							isMulti={isMulti}
							isLoading={!options.length}
							error={error}
							field={field}
							placeholder={title ? title : ' '}
							options={sort}
						/>
					)}
				/>
			</div>
		</form>
	)
}

export default SortBy
