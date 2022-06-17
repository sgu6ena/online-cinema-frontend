import { ChangeEvent, FC, useEffect } from 'react'

import MaterialIcon from '../MaterialIcon'

import styles from './SearchField.module.scss'
import { FiSearch } from 'react-icons/fi'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}


const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	useEffect(() => {
	}, [searchTerm])
	return (
		// <div className={styles.search}>
		// 	<MaterialIcon name={'MdSearch'} />
		// 	<input placeholder="Поиск" value={searchTerm} onChange={handleSearch} />
		// </div>
		<div className={styles.searchBox}>
			<button
				className={styles.btnSearch}>
				<FiSearch />
			</button>
			<input placeholder='Поиск' className='input-search' value={searchTerm} onChange={handleSearch}
						 onBlur={(e) => {
							 e.target.value = ''
							 handleSearch(e)
						 }} />
		</div>

	)
}

export default SearchField


