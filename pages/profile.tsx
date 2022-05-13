import Profile from '../app/components/screens/profile/Profile'
import { NextPageAuth } from '../app/shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
