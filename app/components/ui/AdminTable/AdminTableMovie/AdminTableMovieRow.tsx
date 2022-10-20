import { FC } from 'react'
import AdminActions from '../AdminActions/AdminActions'
import { IAdminMovieTable } from '../admin-table.interface'


const AdminTableMovieRow: FC<IAdminMovieTable> = ({ tableItem:movie, removeHandler }) => {
	return (
		<tr>
			<td>{movie.title}</td>
			<td>{movie.year}</td>
      <td>{movie.history}</td>
      <td>{movie.rate_kp}</td>
      <td>{movie.vote_kp}</td>
      <td>{movie.created_at}</td>
      <td>{movie.last_admin_action}</td>
      <td className={movie.hidden?"bg-primary bg-opacity-50 ":'bg-green-950 bg-opacity-20'}>{movie.hidden?'недоступно':'доступно'}</td>
      <td className={movie.access?"bg-primary bg-opacity-50 ":'bg-green-950 bg-opacity-20'}>{movie.access?'платный':'бесплатный'}</td>
			<td>
				<AdminActions editUrl={`movies/${String(movie.id)}`} removeHandler={() => removeHandler(String(movie.id))} />
			</td>
		</tr>
	)
}

export default AdminTableMovieRow
