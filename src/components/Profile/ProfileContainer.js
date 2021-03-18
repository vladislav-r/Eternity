import React from 'react'
import Profile from './Profile'
import {connect} from 'react-redux'
import {
    getUserProfile,
    getUserStatus, setProfilePhoto,
    toggleIsLoading,
    updateUserStatus,
} from '../../redux/profileReducer'
import {withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {getProfile, getStatus, getUserId, getIsAuth} from '../../redux/selectors/profileSelectors'

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                setProfilePhoto = {this.props.setProfilePhoto}
            />
        )
    }
}

const mapStateToProps = (state) => {

    return {
        profile: getProfile(state),
        status: getStatus(state),
        authorizedUserId: getUserId(state),
        isAuth: getIsAuth(state),
    }
}

export default compose(connect(mapStateToProps,
    {toggleIsLoading, getUserProfile, getUserStatus, updateUserStatus, setProfilePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
