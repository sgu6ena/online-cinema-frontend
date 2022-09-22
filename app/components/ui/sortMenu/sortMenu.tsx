import { FC, useState } from 'react'

import { Controller, useForm } from 'react-hook-form'
import dynamic from 'next/dynamic'

const DynamicSelect = dynamic(
	() => import('../../ui/form-elemets/select/Select'),
	{
		ssr: false,
	},
)

const SortMenu: FC<{ sortId: string, onChange: any }> = ({ sortId=1, onChange }) => {
	const sort = [
		{ value: '1', label: 'По дате добавления' },
		{ value: '2', label: 'По году ' },
		{ value: '3', label: 'По популярности' },
		{ value: '4', label: 'По рейтингу КиноПоиск' },
		{ value: '5', label: 'По рейтингу IMDB' },

	]
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
			<div className={'w-full w-[200px] px-2 -mb-4'}>
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

export default SortMenu