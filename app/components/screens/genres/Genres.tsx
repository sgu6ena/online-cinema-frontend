import { useGenres } from './useGenres'
import { IGenrePortal } from '@/shared/types/movie.types'
import Link from 'next/link'
import { getGenreUrl } from '@/config/url.config'


const Genres = () => {
	const { genres, collections, isLoading } = useGenres()
	return (
		<div className='flex gap-4 flex-wrap justify-center items-stretch p-layout'>

			{!isLoading && [...genres, ...collections].filter(i=>(Number(i.cid)>=100)&&(i.type!=1)).map((i: IGenrePortal) => <Link key={i.cid} href={getGenreUrl(i.cid)}><a>
				<div className={'w-80 rounded'}>
					<img  src={`//portal.idc.md/img/mov-selec/${i.cid}.jpg`} className={'rounded-lg'}/>
				</div>
			</a></Link>)}


		</div>
	)
}

export default Genres