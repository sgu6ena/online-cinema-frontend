import {createAsyncThunk} from '@reduxjs/toolkit'
import {toastr} from 'react-redux-toastr'

import {errorCatch} from '../../api/api.helperts'
import {AuthService} from '../../services/auth/auth.service'
import {toastError} from '../../utils/toast-error'

import {IAuthResponse, IEmailPassword, ITokens} from './user.interface'

export const register = createAsyncThunk<ITokens, IEmailPassword>(
    'register',
    async ({email, password}, thunkApi) => {
        try {
            const response = await AuthService.register(email, password)
            toastr.success('', 'Регистрация прошла успешно')
            return response.data
        } catch (error) {
            toastError(error)
            return thunkApi.rejectWithValue(error)
        }
    }
)
export const login = createAsyncThunk<ITokens, IEmailPassword>(
    'login',
    async ({email, password}, thunkApi) => {
        try {
            const response = await AuthService.login(email, password)
            toastr.success('', 'Вы успешно вошли')
            console.log("login user act", response)
            return response.data.user
        } catch (error) {
            toastError(error)
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const logout = createAsyncThunk(
    'logout',
    async (_, thunkApi) => await AuthService.logout()
)
//
// export const checkAuth = createAsyncThunk<IAuthResponse>(
//     'auth/check-auth',
//     async (_, thunkApi) => {
//         try {
//             const response = await AuthService.getNewTokens()
//
//             return response.data
//         } catch (error) {
//             if (errorCatch(error) === 'jwt expired') {
//                 toastr.error(
//                     'Выход',
//                     'Время авторизации вышло. Пожалуйста, войдтие снова.'
//                 )
//             }
//             thunkApi.dispatch(logout())
//             return thunkApi.rejectWithValue(error)
//         }
//     }
// )
