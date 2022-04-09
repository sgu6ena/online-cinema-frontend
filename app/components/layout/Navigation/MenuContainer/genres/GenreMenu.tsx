import { FC } from 'react'
import Menu from '../Menu'
import { usePopularGenres } from './usePopularGenres'
import { usePortalGenres } from './usePortalGenres'

const GenreMenu: FC = () => {
	// const { isLoading, data } = usePopularGenres()
	const { isLoading, data } = usePortalGenres()
	return isLoading
		? <div className={'mx-11 mb-6'}>Loading...</div>
		: <Menu menu={{ title: 'Жанры ', items: data || [] }} />
}


export default GenreMenu