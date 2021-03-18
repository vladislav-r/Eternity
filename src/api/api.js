import * as axios from "axios";
import {login} from "../redux/authReducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': 'b546ac81-5621-414c-80ef-cf4323377b34'}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => {
                return response.data
            })
    },
    follow(userid) {
        return instance.post(`follow/${userid}`)
            .then((response) => {
                return response.data
            })
    },
    unFollow(userid) {
        return instance.delete(`follow/${userid}`)
            .then((response) => {
                return response.data
            })
    },


}

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId ? userId : 15273}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
    setUserProfilePhoto(photoFile) {
        let formData = new FormData()
        formData.append('image', photoFile)
        console.log(formData)
        return instance.put('profile/photo', formData, {headers: {'Content-Type': 'multipart/form-data'}})
    }
}


export const authAPI = {
    authUser() {
        return instance.get(`/auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe = false) {
        return instance.post('/auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.post('/auth/logout')
    },
}

