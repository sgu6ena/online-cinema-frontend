import Heading from '../app/components/ui/heading/Heading'
import Meta from '../app/utils/meta/Meta'

export default function Error404() {
	return (
		<div className="flex justify-center items-center p-layout m-auto h-96">
			<Meta title="Страница не найдена" />
			<Heading title="404 | страница не найдена" />
		</div>
	)
}
