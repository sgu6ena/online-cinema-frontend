import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef, useState } from 'react'

import { isAdminSelector, useAuth } from '../../../../hooks/useAuth'
import MaterialIcon from '../../../ui/MaterialIcon'
import styles from './burgers.module.scss'
import { headerNavMenu, notUserMenu, userMenu } from '../menu.data'

import LogoutButton from './LogoutButton'
import { LINKS } from '../../../../config/links'

const Burgers: FC = () => {
	const isAdmin = isAdminSelector()
	const { user } = useAuth()
	const { asPath } = useRouter()
	const [isShow, setIsShow] = useState(false)
	const [isShowBurgerMenu, setShowBurgerMenu] = useState(false)

	const avatarMenu = user ? [...userMenu] : [...notUserMenu]

	const menuRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setIsShow(false)
		setShowBurgerMenu(false)

		// Добавляем обработчик клика на документ
		const handleClick = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsShow(false)
				setShowBurgerMenu(false)
			}
		}

		document.addEventListener('click', handleClick)

		// Отписываемся от обработчика при размонтировании компонента
		return () => {
			document.removeEventListener('click', handleClick)
		}
	}, [asPath])

	const toggleMenuAvatar = () => {
		setIsShow(!isShow)
		setShowBurgerMenu(false)
	}

	const toggleMenuBurger = () => {
		setShowBurgerMenu(!isShowBurgerMenu)
		setIsShow(false)
	}

	return (
		< div  ref={menuRef}>
			<div className={styles.menu}>
				<div
					className={cn(
						styles.avatar,
						isShow ? styles.change : '',
					)}
					onClick={toggleMenuAvatar}
				>
					<div className={styles.bar1}></div>
					<div className={styles.bar2}></div>
					<div className={styles.bar3}></div>
				</div>
				<ul className={isShow ? 'active' : 'hidden'}>
					{isAdmin && <li>
						<Link href={LINKS.ADMIN}>
							<a>
								<MaterialIcon name='MdAdminPanelSettings' />
							Админка
							</a>
						</Link>
					</li>}
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
			<div className={styles.menu} >
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

				<ul className={isShowBurgerMenu ? 'active' : 'hidden'} >
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
					{isAdmin && <li>
						<Link href={LINKS.ADMIN}>
							<a>
								<MaterialIcon name='MdAdminPanelSettings' />
								Админка
							</a>
						</Link>
					</li>}
					{avatarMenu.map((i) => (
						<li key={i.link}>
							<Link href={i.link}>
								<a>
									<MaterialIcon name={i.icon} />
									{i.title}
								</a>
							</Link>
						</li>))}
					{user && <LogoutButton />}
				</ul>
			</div>
		</div>
	)
}

export default Burgers
