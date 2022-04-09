import React,  { FC } from 'react'
import SkeletonLoader from '../../../../ui/SkeletonLoader'
import Menu from '../Menu'
import { usePopularGenres } from './usePopularGenres'
import { usePortalGenres } from './usePortalGenres'

const GenreMenu: FC = () => {
	// const { isLoading, data } = usePopularGenres()
	const { isLoading, data } = usePortalGenres()
	return true
		? <div className={'mx-11 mb-6'}><SkeletonLoader count={5} className={'h-7 mt-6'}/></div>
		: <Menu menu={{ title: 'Коллекции', items: data || [] }} />
}


export default GenreMenu