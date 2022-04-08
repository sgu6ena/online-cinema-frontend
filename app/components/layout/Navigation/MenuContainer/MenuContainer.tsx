import { FC } from 'react'

import Menu from './Menu'
import { firstMenu } from './menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />
		</div>
	)
}

export default MenuContainer
