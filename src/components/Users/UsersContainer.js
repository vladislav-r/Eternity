import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Users from './Users'

import {
    requestUsers,
    setCurrentPage,
    followSuccess,
    toggleFollowingProgress,
    unfollowSuccess,
    follow,
    unfollow,
} from '../../redux/usersReducer'

import {
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    
} from '../../redux/selectors/usersSelectors'




class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return (
            <>
                {/*{this.props.isLoading ? <Preloader/> : null}*/}
                <Users
                    componentDidMount={this.componentDidMount}
                    onPageChange={this.onPageChange}
                    followSuccess={this.props.followSuccess}
                    unfollowSuccess={this.props.unfollowSuccess}
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    isLoading={this.props.isLoading}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />
            </>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isLoading: state.usersPage.isLoading,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }


// using Selectors
const mapStateToProps = (state) => {
    return {
        // users: getUsers(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        followSuccess,
        unfollowSuccess,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers,
        follow,
        unfollow,
        
    })
)(UsersContainer)
