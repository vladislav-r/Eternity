import defaultUserPhoto from '../media/default/user.svg'
import {profileAPI} from '../api/api'

const ADD_POST = 'profile/ADD_POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const TOGGLE_IS_LOADING = 'profile/TOGGLE_IS_LOADING'
const SET_STATUS = 'profile/SET_STATUS'
const DELETE_POST = 'profile/DELETE_POST'
const SET_PROFILE_PHOTO_SUCCESS = 'profile/SET_PROFILE_PHOTO_SUCCESS'


let initialState = {
    posts: [
        // {
        //     id: 1,
        //     name: 'Владислав Чернышев',
        //     message:
        //         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora consectetur accusamus quisquam est iste. Deserunt iste incidunt perferendis illo fugit.',
        //     img: defaultUserPhoto,
        //     date: '15 марта 2020 г.',
        //     time: '14:45',
        // },
    ],
    profile: null,
    isLoading: false,
    status: '',


}

// state=initialState задаем значение state по умолчанию
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}
            let date = new Date()
            let timeOptions = {hour: 'numeric', minute: 'numeric'}
            let time = new Date()
            // profileAPI.getUserPhoto(post.id).then()
            let newPost = {
                id: new Date().getMilliseconds().toString(),
                name: 'Владислав Чернышев',
                message: action.newPostText,
                img: defaultUserPhoto,
                date: date.toLocaleDateString('ru', dateOptions),
                time: time.toLocaleTimeString('ru', timeOptions),
            }
            return {...state, posts: [newPost, ...state.posts]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SET_PROFILE_PHOTO_SUCCESS:

            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading,})
export const setUserStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const setProfilePhotoSuccess = (photos) => ({type: SET_PROFILE_PHOTO_SUCCESS, photos})


export const getUserProfile = (userId) => {

    return (dispatch) => {
        dispatch(toggleIsLoading(true))
        profileAPI.getProfile(userId).then((data) => {
            dispatch(toggleIsLoading(false))
            dispatch(setUserProfile(data))
        })
    }
}
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((response) => {
            dispatch(setUserStatus(response.data))
        })
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            response.data.resultCode === 0 && dispatch(setUserStatus(status))
        })
    }
}

export const setProfilePhoto = (photoFile) => {
    return async (dispatch) => {
        let response = await profileAPI.setUserProfilePhoto(photoFile)
        response.data.resultCode === 0 && dispatch(setProfilePhotoSuccess(response.data.data.photos))

    }
}


export default profileReducer
