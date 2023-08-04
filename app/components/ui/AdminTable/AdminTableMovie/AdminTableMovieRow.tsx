import { FC } from 'react'
import AdminActions from '../AdminActions/AdminActions'
import { IAdminMovieTable } from '../admin-table.interface'
import Link from 'next/link'
import PayToggleButton from '@/screens/admin/movies/payToggleButton'
import VisibleToggleButton from '@/screens/admin/movies/visibleToggleButton'


const AdminTableMovieRow: FC<IAdminMovieTable> = ({ tableItem: movie, removeHandler }) => {
	return (
		<tr className={'m-0'}>
			<td><Link href={`movies/${String(movie.id)}`}><a
				className={'flex gap-4 relative  items-center w-full'}>

				<img className={movie.links > 1 ? ' border border-[#6A5ACD] z-2' : ''} src={movie.logo}
						 alt={movie.title} />
				{movie.links > 1
					&& <span
						className={'absolute bottom-[-8px] bg-[#6A5ACD] rounded text-xs text-white font-bold px-1 z-40 left-[-31px]'}>
						сериал
				</span>}
				{
					movie.genre.filter(genre=>genre.id==20).length>0	&& <span
						className={'absolute top-[-8px] bg-[#FFFF00] rounded text-xs text-black font-bold px-1 z-40 left-[-32px]'}>
						мульт
				</span>
				}
				{
					movie.genre.filter(genre=>genre.id==45).length>0	&& <span
						className={'absolute top-[-8px] bg-[#008000] rounded text-xs text-white font-bold px-1 z-40 left-[64px]'}>
						шоу
				</span>
				}


			 {movie.title} {movie.links > 1 ? `(${movie.links})` : ''}
			</a></Link>
			</td>
			<td>{movie.age}</td>
			<td>{movie.country.map(country => country + ' ')}</td>
			<td>{movie.genre.map(genre => genre.name + ' ')}</td>
			<td>{movie.year}</td>
			<td>{movie.history}</td>
			<td>{movie.rate_kp}</td>
			<td>{movie.vote_kp}</td>
			<td>{movie.created_at}</td>
			<td>{movie.last_admin_action}</td>


			<td><VisibleToggleButton movieId={movie.id.toString()} isVisible={movie.hidden === 1} /></td>
			<td>
				<PayToggleButton movieId={movie.id.toString()} isPayed={movie?.access === 1} />
			</td>
			<td>
				{/*<AdminActions editUrl={`movies/${String(movie.id)}`} removeHandler={() => removeHandler(String(movie.id))} />*/}
			</td>
		</tr>
	)
}

export default AdminTableMovieRow
