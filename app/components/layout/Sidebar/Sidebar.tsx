import {FC} from 'react'

import MovieContainer from './MoviesContainer/MoviesContainer'
import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
    return (
        <div className={styles.sidebar}>

            <MovieContainer/>
        </div>
    )
}

export default Sidebar
