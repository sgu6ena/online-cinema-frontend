import { FC, useState } from 'react'

import { useAuth } from '../../../../hooks/useAuth'
import SkeletonLoader from '../../../ui/SkeletonLoader'
import Heading from '../../../ui/heading/Heading'
import styles from '../settings.module.scss'

import Modal from './Modals/Modal'
import ChangePass from './Modals/ChangePass'

const Account: FC = () => {
	const { user, isLoading } = useAuth()
	const [isShowModal, setShowModal] = useState(false)

	return (
		<div>
			<div className={'flex justify-between max-w-5xl '}>
				<Heading title={'АККАУНТ'} className='mb-5' />
				{user && <img width={100} height={100} src={user.avatar} alt={user.login} className='rounded rounded-full' />}
			</div>

			{isLoading && <SkeletonLoader />}
			{user && (
				<>
					<table className={styles.table}>
						<tbody>
						<tr><td>Логин</td><td><span>{user.login}</span></td></tr>
						<tr><td>Пароль</td><td>********</td><td align='right' onClick={() => setShowModal(true)}>Изменить пароль</td></tr>
						<tr><td>E-mail</td><td><span>{user.email}</span></td></tr>
						{user.name &&<tr>
								<td>Имя</td>
								<td><span>{user.name}</span></td>
							</tr>}
						</tbody>
					</table>
				</>
			)}
			{isShowModal && <Modal setIsShow={setShowModal}><ChangePass setIsShow={setShowModal} /> </Modal>}
		</div>
	)
}

export default Account
