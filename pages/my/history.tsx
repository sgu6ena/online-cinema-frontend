import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

import My from '../../app/components/screens/my/My'

const DynamicHistory = dynamic(
	() => import('../../app/components/screens/my/history/history'),
	{
		ssr: false,
	}
)

const HistoryPage: NextPage = () => {
	return (
		<My>
			<DynamicHistory />
		</My>
	)
}

export default HistoryPage
