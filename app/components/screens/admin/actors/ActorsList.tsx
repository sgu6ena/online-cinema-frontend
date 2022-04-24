import {FC} from 'react'

import Meta from '../../../../utils/meta/Meta'
import AdminHeader from '../../../ui/AdminHeader/AdminHeader'
import AdminTable from '../../../ui/AdminTable/AdminTable'
import AdminNavigation from '../../../ui/admin-navigation/AdminNavigation'
import Heading from '../../../ui/heading/Heading'

import {useActors} from './useActors'

const ActorsList: FC = () => {
    const {handleSearch, isLoading, searchTerm, data, deleteAsync, createAsync} = useActors()
    return (
        <Meta title="Актёры">
            <AdminNavigation/>
            <Heading title={'Актёры'}/>
            <AdminHeader searchTerm={searchTerm} handleSearch={handleSearch} onClick={createAsync}/>

            <AdminTable
                headerItems={['Имя актёра', 'Количество фильмов']}
                tableItems={data || []}
                removeHandler={deleteAsync}
                isLoading={isLoading}
            />
        </Meta>
    )
}

export default ActorsList
