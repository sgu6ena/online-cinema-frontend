import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { toast } from 'react-hot-toast'

import { useAuth } from '@/hooks/useAuth'
import MaterialIcon from '../MaterialIcon'
import Heading from '../heading/Heading'
import styles from './report.module.scss'

const Report: FC = () => {
	const [openModal, setOpenModal] = useState(false)
	const { user } = useAuth()
	const { asPath } = useRouter()
	const feedbackSubmit = (event: any) => {
		console.log({
			from: 'userid:' + user?.id + ' email:' + user?.email,
			asPath,
			text: event.target.previousElementSibling.value,
		})
		setOpenModal(!openModal)
		event.target.previousElementSibling.value = ''
		toast.success('Спасибо за обращение')
	}
	return (
		<div>
			{user ? (
				<>
					<div
						className={styles.report}
						title="Сообщить, если что-то не так"
						onClick={() => setOpenModal(!openModal)}
					>
						<MaterialIcon name="MdError" />
					</div>
					<div className={openModal ? 'z-70 block top-0 left-0' : 'hidden'}>
						<div className={styles.wrapper}>
							<div
								className={styles.back}
								onClick={() => setOpenModal(false)}
							></div>
							<div className={styles.modal}>
								<div className={styles.card}>
									<div className={styles.head}>
										<Heading
											title={'Что-то не так?'}
											className="mb-0 text-center"
										/>
								<div className={'cursor-pointer'} onClick={() => setOpenModal(!openModal)}>
									<MaterialIcon name={'MdClose'}  />
								</div>


									</div>

									<p>Сообщите нам - и мы постараемся это исправить</p>
									<form>
										<textarea name="" id="" cols={40} rows={6}></textarea>
										<div className={styles.button} onClick={feedbackSubmit}>
											Отправить
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				''
			)}
		</div>
	)
}

export default Report
