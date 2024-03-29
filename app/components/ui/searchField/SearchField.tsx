import { ChangeEvent, FC, useEffect, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	useEffect(() => {}, [searchTerm])
	const input  = useRef(null)
	return (
		<>
			<div className={styles.searchBox}>
				<button className={styles.btnSearch} onClick={()=>{ // @ts-ignore
					input.current.focus();}}>
					<FiSearch />
				</button>
				<input
					ref={input}
					placeholder="Поиск"
					className="input-search"
					value={searchTerm}
					onChange={handleSearch}
					onBlur={(e) => {
						e.target.value = ''
						handleSearch(e)
					}}
				/>
			</div>
		</>
	)
}

export default SearchField
