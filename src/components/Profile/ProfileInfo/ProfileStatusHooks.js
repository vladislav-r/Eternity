import s from './ProfileInfo.module.css'
import {useState, useEffect} from 'react'
import React from "react";


const ProfileStatusHooks = (props) => {

    const [editMode, setEditMode] = useState(false) //destruction assignment
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]) //массив чтобы хук сработал только один раз, а то статус не будет меняться

    const activateEditMode = () => {
        setEditMode(true)
    }

    const disableEditModeOnKeyPress = (e) => {
        if(e.key ==='Enter'){
            disableEditMode()()
        }
    }
    const disableEditModeOnBlur = () => {
        disableEditMode()()
    }

    const disableEditMode = () => {
        return () => {
            setEditMode(false)
            props.updateUserStatus(status)
        }
    }


const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
}

return (
    <div className={s.profileInfoStatus}>
        {!editMode
            ? <div onDoubleClick={activateEditMode} className={s.profileStatusBlock}>
                <div className={s.profileStatus}>{status || ' '}</div>
            </div>
            : <div className={s.profileStatusEditBlock}>
                <input onKeyPress={disableEditModeOnKeyPress} onBlur={disableEditModeOnBlur} onChange={onStatusChange}
                       autoFocus={true} value={status} className={s.profileStatusEdit}/>
            </div>}
    </div>
)
}

export default ProfileStatusHooks
