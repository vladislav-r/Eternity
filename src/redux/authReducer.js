import {authAPI, profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_HEADER_PROFILE_INFO = 'auth/SET_HEADER_PROFILE_INFO'
const TOGGLE_IS_LOADING = 'auth/TOGGLE_IS_LOADING'


let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    fullName: null,
    photos: {
        small: null,
        large: null
    },
    isLoading: false
}

// state=initialState задаем значение state по умолчанию
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case SET_HEADER_PROFILE_INFO:
            return {...state, ...action.data}
        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})
export const setHeaderProfileInfo = (photos, fullName) => ({type: SET_HEADER_PROFILE_INFO, data: {photos, fullName}})
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading})

//thunk
export const getAuthUserData = () => async (dispatch) => {
    dispatch(toggleIsLoading(true))
    let data = await authAPI.authUser()
    dispatch(toggleIsLoading(false))
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true))
        dispatch(toggleIsLoading(true))

        let data1 = await profileAPI.getProfile(id)
        dispatch(toggleIsLoading(false))
        let {photos, fullName} = data1
        dispatch(setHeaderProfileInfo(photos, fullName))
    }
}

//функция которая возвращает функцию (замыкание) ПОНЯТЬ ЭТУ ТЕМУ!!!!!!!!!!!!!!!!!!!!!
export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages ? response.data.messages : 'Какая-то ошибка'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


export default authReducer