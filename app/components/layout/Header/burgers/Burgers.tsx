import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { BsPersonSquare } from 'react-icons/bs'

import { useAuth } from '../../../../hooks/useAuth'
import MaterialIcon from '../../../ui/MaterialIcon'
import styles from './burgers.module.scss'
import { headerNavMenu, notUserMenu, userMenu } from '../menu.data'

import LogoutButton from './LogoutButton'

const Burgers: FC = () => {
	const { user } = useAuth()
	const { asPath } = useRouter()
	const [isShow, setIsShow] = useState(false)
	const [isShowBurgerMenu, setShowBurgerMenu] = useState(false)

	const toggleMenuAvatar = () => {
		setIsShow(!isShow)
		setShowBurgerMenu(false)
	}
	const toggleMenuBurger = () => {
		setShowBurgerMenu(!isShowBurgerMenu)
		setIsShow(false)
	}
	useEffect(() => {
		setIsShow(false)
		setShowBurgerMenu(false)
	}, [asPath])

	const avatarMenu = user ? [...userMenu] : [...notUserMenu]
	return (
		<>
			<div className={styles.menu}>
				<div
					className={cn(styles.avatar, isShow ? styles.change : '')}
					onClick={toggleMenuAvatar}
				>
					{isShow ? (
						<MaterialIcon name={'MdClose'} />
					) : user?.avatar ? (
						<img
							src={user.avatar}
							width={40}
							height={40}
							className='rounded-full'
						/>
					) : (
						<BsPersonSquare className='h-10 w-10 text-white' />
					)}
				</div>
				<ul className={isShow ? 'active' : 'hidden'}>
					{avatarMenu.map((i) => (
						<li key={i.link}>
							<Link href={i.link}>
								<a>
									<MaterialIcon name={i.icon} />
									{i.title}
								</a>
							</Link>
						</li>
					))}
					{user && <LogoutButton />}
				</ul>
			</div>
			<div className={styles.menu}>
				<div
					className={cn(
						styles.container,
						isShowBurgerMenu ? styles.change : '',
					)}
					onClick={toggleMenuBurger}
				>
					<div className={styles.bar1}></div>
					<div className={styles.bar2}></div>
					<div className={styles.bar3}></div>
				</div>

				<ul className={isShowBurgerMenu ? 'active' : 'hidden'}>
					{headerNavMenu.map((i) => (
						<li key={i.link}>
							<Link href={i.link}>
								<a>
									<MaterialIcon name={i.icon} />
									{i.title}
								</a>
							</Link>
						</li>))}
					<hr />
					{avatarMenu.map((i) => (
						<li key={i.link}>
							<Link href={i.link}>
								<a>
									<MaterialIcon name={i.icon} />
									{i.title}
								</a>
							</Link>
						</li>))}

				</ul>
			</div>
		</>
	)
}

export default Burgers
