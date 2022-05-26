import { ChangeEvent, FC } from 'react'

import MaterialIcon from '../MaterialIcon'

import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		// <div className={styles.search}>
		// 	<MaterialIcon name={'MdSearch'} />
		// 	<input placeholder="Поиск" value={searchTerm} onChange={handleSearch} />
		// </div>
		<div className={styles.searchBox}>
			<button
				className={styles.btnSearch}>
				<MaterialIcon  name={'MdSearch'}/>
			</button>
			<input placeholder="ПОИСК" className='input-search' value={searchTerm} onChange={handleSearch} onBlur={(e)=>e.target.value=' '}/>
		</div>

)
}

export default SearchField


