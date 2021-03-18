import s from './ProfileInfo.module.css'
import React from "react";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
        this.forceUpdate()
    }

    disableEditMode = (e) => {
        if(e.key === 'Enter'){
            this.setState({
                editMode: false
            })
            this.props.updateUserStatus(this.state.status)
            this.forceUpdate()
        }

    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
          <div className={s.profileInfoStatus}>
              {!this.state.editMode
                ? <div onDoubleClick={this.activateEditMode} className={s.profileStatusBlock}>
                    <span className={s.profileStatus}>{this.props.status || '---------'}</span>
                </div>
                : <div onKeyPress={this.disableEditMode} className={s.profileStatusEditBlock}>
                    <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status}
                           className={s.profileStatusEdit}/>
                </div>}
          </div>
        )
    }
}

export default ProfileStatus
