import { FC, useState } from 'react'

import { useAuth } from '../../../../hooks/useAuth'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import Heading from '../../../ui/heading/Heading'
import styles from '../settings.module.scss'

import Modal from './Modals/Modal'
import ChangePass from './Modals/ChangePass'
import Button from '../../../ui/form-elemets/Button'

const Account: FC = () => {
	const { user, isLoading } = useAuth()
	const [isShowModal, setShowModal] = useState(false)

	return (
		<div>
			<div className={'flex justify-between max-w-5xl '}>
				<Heading title={'АККАУНТ'} className='mb-5' />

			</div>
<Button onClick={() => setShowModal(true)}>Изменить пароль</Button>
			{isLoading && <SkeletonLoader />}
			{user && (
				<>
					<table className={styles.table}>
						<tbody>
						<tr>
							<td>Логин</td>
							<td><span>{user.login}</span></td>
						</tr>
						<tr>
							<td>Пароль</td>
							<td>********</td>
							<td align='right'></td>
						</tr>
						<tr>
							<td>E-mail</td>
							<td><span>{user.email}</span></td>
						</tr>
						{user.name && <tr>
							<td>Имя</td>
							<td><span>{user.name}</span></td>
						</tr>}
						<tr>
							<td>Подписка</td>
							<td><span>{user.subscription ? 'активна, ' : 'не активна'}{user.dtEnd}</span></td>
						</tr>
						{user.subscription ? <>
							<tr>
								<td>Автопродление</td>
								<td><span>{user.dtFlow ? 'отключено' : 'активно'}</span></td>
							</tr>
							<tr>
								<td>Точка оплаты</td>
								<td><span>{user.point ? user.point : '-'}</span></td>
							</tr>
						</> : ''}
						<tr>
							<td>Портал за рубль</td>
							<td><span>{user.promo ? 'доступен' : 'недоступен'}</span></td>
						</tr>
						</tbody>
					</table>
				</>
			)}
			{isShowModal && <Modal setIsShow={setShowModal}><ChangePass setIsShow={setShowModal} /> </Modal>}
		</div>
	)
}

export default Account
