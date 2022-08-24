import type { NextPage } from 'next'
import My from '../../app/components/screens/my/My'
import History from '../../app/components/screens/my/history/history'


const HistoryPage: NextPage = () => {
	return <My><History /></My>
}

export default HistoryPage
