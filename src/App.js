import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import './App.css'
import HeaderContainer from "./components/Header/HeaderContainer";
import Search from "./components/Search/Search"
import UsersContainer from "./components/Users/UsersContainer";
import PreloaderNew from "./components/common/Preloader/PreloaderNew";
import Login from "./components/Login/Login";
import {Route, withRouter, Switch} from "react-router-dom";
import {initializeApp} from "./redux/appReducer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

// import {withAuthRedirect} from "./hoc/withAuthRedirect";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if(!this.props.initialized){
            return <PreloaderNew />
        }

        return (
            <div>
                <HeaderContainer/>
                <React.Suspense fallback={<h1>LOading</h1>}>
                    <Switch>
                        <Route exact path='/search' render={() => <Search/>}/>
                        <Route exact path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route exact path='/users' render={() => <UsersContainer/>}/>
                        <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route exact path='/login' render={() => <Login/>}/>
                        <Route render={() => <h1>404</h1>}/>
                    </Switch>
                </React.Suspense>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(withRouter, connect(mapStateToProps, {initializeApp}))(App)
