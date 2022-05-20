import React from 'react'
import { useGenres } from './useGenres'
import { IGenrePortal } from '../../../shared/types/movie.types'
import Link from 'next/link'
import { getGenreUrl } from '../../../config/url.config'


const Genres = () => {
	const { genres, collections, isLoading } = useGenres()
	return (
		<div className='flex gap-3 flex-wrap justify-center items-stretch p-layout'>

			{!isLoading && [...genres, ...collections].map((i: IGenrePortal) => <Link href={getGenreUrl(i.cid)}><a>
				<button className={'w-44 p-3 h-28  text-xl btn-primary opacity-70 hover:opacity-100  text-white'}>{i.title}</button>
			</a></Link>)}


		</div>
	)
}

export default Genres