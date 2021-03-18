import s from './ProfileInfo.module.css'
// import Preloader from "../../common/Preloader/Preloader";
import defaultProfilePhoto from '../../../media/default/user.svg'
import ProfileStatusHooks from './ProfileStatusHooks'
import PreloaderNew from "../../common/Preloader/PreloaderNew";
import {NavLink} from 'react-router-dom';
import React from 'react'
import {Field} from "redux-form";
import {required} from "../../../utils/validators/validators";
import EditProfileDataForm from "./EditProfileDataForm";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = React.useState(false)

    if (!props.profile) {
        return <PreloaderNew/>
    }

    const onProfilePhotoSelect = (e) => {
        if (e.target.files.length) {
            let updatePhoto = window.confirm('Обновить фотографию?')
            updatePhoto && props.setProfilePhoto(e.target.files[0])
        }
    }


    return (
        <div className={s.profileInfo}>
            <div className={s.profileInfoTop}>
                <div className={s.profilePhotoBlock}>
                    <img alt='' className={s.profilePhoto}
                         src={props.profile.photos.large ? props.profile.photos.large : defaultProfilePhoto}/>
                    <div>
                        {props.isOwner && <input onChange={onProfilePhotoSelect} type={'file'}/>}
                    </div>
                </div>

                {editMode
                    ? <EditProfileDataForm {...props}/>
                    : <div className={s.infoBlock}>
                        <div className={s.profileName}>{props.profile.fullName}</div>
                        <ProfileStatusHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
                        <div>
                            <span><b>Ищет работу:</b> {props.profile.lookingForAJob ? 'Да ' : 'Нет '}</span>
                            {props.profile.lookingForAJobDescription &&
                            <span><i>"{props.profile.lookingForAJobDescription}"</i></span>}
                        </div>
                        <div className={s.profileInfoSocialLinks}>
                            <details className={s.contactsList}>
                                <summary>Контакты</summary>
                                {Object.keys(props.profile.contacts).map(key => <Contacts key={key} contactTitle={key}
                                                                                          contactValue={props.profile.contacts[key]}/>)}
                            </details>
                        </div>
                        {props.isOwner && <button onClick={() => setEditMode(true)}>Редактировать</button>}
                    </div>}

            </div>
            <div className={s.profileInfoBottom}>
                <div className={s.photosItemBlock}>
                    <NavLink to=""><img alt='' className={s.photosItem} src={props.profile.photos.large}/></NavLink>
                </div>
                <div className={s.photosItemBlock}>
                    <NavLink to=""><img alt='' className={s.photosItem} src={props.profile.photos.large}/></NavLink>
                </div>
                <div className={s.photosItemBlock}>
                    <NavLink to=""><img alt='' className={s.photosItem} src={props.profile.photos.large}/></NavLink>
                </div>

            </div>
        </div>
    )
}

const Contacts = ({contactTitle, contactValue}) => {
    return (
        <div>
            <a href={contactValue}>{contactTitle}</a>
        </div>
    )
}



export default ProfileInfo;