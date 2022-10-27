import { FC } from 'react'


import StatisticBlock from './statistic.block'

const Statistic: FC = () => {

	return (
		<div>
			<StatisticBlock id={'108'} key={'108'} />
			<StatisticBlock id={'104'} key={'104'} />
			<StatisticBlock id={'105'} key={'105'} />
			<StatisticBlock id={'106'} key={'106'} />
		</div>
	)
}

export default Statistic