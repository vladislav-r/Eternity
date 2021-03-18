import React from 'react'
import Header from "./Header";
import {connect} from 'react-redux'
import {logout, setHeaderProfileInfo} from "../../redux/authReducer";
import {compose} from "redux";
import {getProfile} from "../../redux/selectors/profileSelectors";

class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => {
    return{
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        fullName: state.auth.fullName,
        photos: state.auth.photos,
        profile: getProfile(state)
    }

}

export default compose(connect(mapStateToProps, {setHeaderProfileInfo, logout}))(HeaderContainer)
