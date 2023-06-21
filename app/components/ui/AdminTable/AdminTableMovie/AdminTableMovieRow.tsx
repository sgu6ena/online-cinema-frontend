import { FC } from 'react'
import AdminActions from '../AdminActions/AdminActions'
import { IAdminMovieTable } from '../admin-table.interface'
import Link from 'next/link'
import PayToggleButton from '@/screens/admin/movies/payToggleButton'
import VisibleToggleButton from '@/screens/admin/movies/visibleToggleButton'


const AdminTableMovieRow: FC<IAdminMovieTable> = ({ tableItem: movie, removeHandler }) => {
	return (
		<tr>
			<td><Link href={`movies/${String(movie.id)}`}><a className={'flex gap-1 w-full'}><img src={movie.logo}
																																														alt={movie.title} />{movie.title}
			</a></Link></td>
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
				<AdminActions editUrl={`movies/${String(movie.id)}`} removeHandler={() => removeHandler(String(movie.id))} />
			</td>
		</tr>
	)
}

export default AdminTableMovieRow
