import { FC } from 'react'

import Button from '../../ui/form-elemets/Button'

const AdminCreateButton: FC<{ onClick: () => void }> = ({ onClick }) => {
	return <Button onClick={onClick}>Создать</Button>
}

export default AdminCreateButton
