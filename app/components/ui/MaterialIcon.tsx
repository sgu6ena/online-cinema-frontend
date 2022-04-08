import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconsName } from '../../shared/types/icon.types'

const MaterialIcon: FC<{ name: TypeMaterialIconsName }> = ({ name }) => {
	const IconComponent = MaterialIcons[name]
	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon
