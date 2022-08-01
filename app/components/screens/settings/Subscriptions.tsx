import { FC } from 'react'
import Heading from '../../ui/heading/Heading'
import Subheading from '../../ui/heading/Subheading'
import Button from '../../ui/form-elemets/Button'
import styles from "./settings.module.scss"
import {RiListCheck2 } from 'react-icons/ri'
import MaterialIcon from '../../ui/MaterialIcon'
import { useProfile } from './useProfile'
import { useAuth } from '../../../hooks/useAuth'


const Subscriptions: FC = () => {
	// const { user, isLoading } = useProfile()
	const {user, isLoading} = 	useAuth()
	const isSubscribed = !!user?.paid
	const date = user?.dtEnd

	return (
		<div>
			<Heading title={'ПОДПИСКА'} className='mb-5' />
			{isLoading&&<div>Loading...</div>}
			<div className={styles.card}>
				<img src='/images/settings/subs.png' alt='' className={'w-full'} />
				<Subheading title='Смотреть в удовольствие' />
				<div className={styles.line}>
					<div className={styles.icon}>
						<RiListCheck2 />
					</div>
					<div>
						<div className={styles.title}>Большая коллекция</div>
						<div className={styles.subtitle}>Известные топовые фильмы и новинки</div>
					</div>
				</div>
				<div className={styles.line}>
					<div className={styles.icon}>
						<MaterialIcon name={'MdTv'} />
					</div>
					<div>
						<div className={styles.title}>На любом устройстве</div>
						<div className={styles.subtitle}>Смотрите на смартфоне, ноутбуке, телевизоре</div>
					</div>
				</div>
				<div className={styles.line}>
					<div className={styles.icon}>
						<MaterialIcon name={'MdDoDisturb'} />
					</div>
					<div>
						<div className={styles.title}>Без рекламы</div>
						<div className={styles.subtitle}>Видео не прервется на самом интересном месте</div>
					</div>
				</div>
				{isSubscribed && <div>
					<div>Подписка оформлена</div>
					<div className={styles.subtitle}>следующее списание произойдет {date} </div>
				</div>}
				{isSubscribed
					? <Button>Отменить подписку</Button>
					: <Button>Оформить подписку</Button>
				}
			</div>
		</div>
	)
}

export default Subscriptions