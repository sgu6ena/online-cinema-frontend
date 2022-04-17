import {FC} from 'react'
import AdminNavigation from '../../app/components/ui/admin-navigation/AdminNavigation'
import Heading from '../../app/components/ui/heading/Heading'
import {NextPageAuth} from '../../app/shared/types/auth.types'
import UserList from "../../app/components/screens/admin/users/UserList";

const Users: NextPageAuth = () => {
    return (


        <UserList/>

    )
}

export default Users