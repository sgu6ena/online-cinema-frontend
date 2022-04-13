import { FC } from 'react'

import Heading from '../app/components/ui/heading/Heading'
import Meta from '../app/utils/meta/Meta'

export default function Error500() {
	return (
		<>
			<Meta title="Внутренняя ошибка сервера" />
			<Heading title="500 - внутренняя ошибка сервера" />
		</>
	)
}
