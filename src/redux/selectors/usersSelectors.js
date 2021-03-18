import {createSelector} from 'reselect'



const getUsersSelector = (state) => (state.usersPage.users)

//навороченный селектор для оптимизации mstp
export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})


export const getPageSize = (state) => (state.usersPage.pageSize)
export const getTotalUsersCount = (state) => (state.usersPage.totalUsersCount)
export const getCurrentPage = (state) => (state.usersPage.currentPage)
export const getIsLoading = (state) => (state.usersPage.isLoading)    
export const getFollowingInProgress= (state) => (state.usersPage.followingInProgress)
