import { ChangeEvent, FC, useEffect, useRef } from 'react'
import { FiSearch } from 'react-icons/fi'
import styles from './SearchField.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchFieldAlt: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	useEffect(() => {}, [searchTerm])
	const input  = useRef(null)
	return (
		<>
			<div className={styles.searchBoxAlt}>
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
						handleSearch(e)
					}}
				/>
				<button onClick={(e:any)=> {
					e.target.previousElementSibling.value = ''
					handleSearch(e)
				}}>×</button>
			</div>
		</>
	)
}

export default SearchFieldAlt
