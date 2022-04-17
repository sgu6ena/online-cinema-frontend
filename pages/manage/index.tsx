import {NextPageAuth} from '../../app/shared/types/auth.types'
import Admin from "../../app/components/screens/admin/home/Admin";

const AdminPage: NextPageAuth = () => {
    return (
        <Admin/>
    )
}

AdminPage.isOnlyAdmin = true

export default AdminPage
