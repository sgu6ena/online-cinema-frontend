import {FC} from 'react'

import SearchField from '../../ui/searchField/Search Field'

import MovieContainer from './MoviesContainer/MoviesContainer'
import Search from './Search/Search'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
    return (
        <div className={styles.sidebar}>

            <MovieContainer/>
        </div>
    )
}

export default Sidebar
