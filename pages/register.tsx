// import { NextPage } from 'next'
//
// import Register from '../app/components/screens/auth/register/Register'
//
// const RegisterPage: NextPage = () => {
// 	return <Register />
// }
//
// export default RegisterPage
import { NextPage } from 'next'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const RegisterPage: NextPage = () => {
	const router = useRouter()

	useEffect(() => {
		router.replace('/auth')
	}, [])

	return null
}

export default RegisterPage