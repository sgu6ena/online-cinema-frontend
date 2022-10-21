import React, { FC, useState } from 'react'
import MaterialIcon from '../MaterialIcon'
import styles from './report.module.scss'
import Button from '../form-elemets/Button'
import Heading from '../heading/Heading'
import { useRouter } from 'next/router'
import { useAuth } from '../../../hooks/useAuth'
import Subheading from '../heading/Subheading'

const Report: FC = () => {
	const [openModal, setOpenModal] = useState(false)
	const { user } = useAuth()
	const { asPath } = useRouter()
	const feedbackSubmit = (event:any) => {
		console.log({ user: user?.id + ' ' + user?.email, asPath, data:event.target.previousElementSibling.value })
	}
	return (
		<div>
			<div className={styles.report} title='Сообщить, если что-то не так' onClick={() => setOpenModal(!openModal)}>
				<MaterialIcon name='MdError' />
			</div>
			<div className={openModal ? 'z-70 block top-0 left-0' : 'hidden'}>
				<div className={styles.wrapper}>
					<div className={styles.back} onClick={() => setOpenModal(false)}></div>
					<div className={styles.modal}>
						<div className={styles.card}>
							<Heading title={'Что-то не так?'} className='mb-0 text-center' />
							<p>Сообщите нам - и мы постараемся это исправить</p>
							<form>
								<textarea name='' id='' cols={40} rows={6}></textarea>
								<div className={styles.button} onClick={feedbackSubmit}>Отправить</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Report