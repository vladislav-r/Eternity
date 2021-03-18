import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import PreloaderNew from "../common/Preloader/PreloaderNew";

const Profile = (props) => {
    return (
        <div className={s.profile}>
            {!props.profile ? <PreloaderNew/> :
                <ProfileInfo
                    setProfilePhoto={props.setProfilePhoto}
                    isOwner={props.isOwner}
                    profile={props.profile}
                    status={props.status}
                    updateUserStatus={props.updateUserStatus}/>}
            {props.profile && <MyPostsContainer/>}

        </div>
    )
}

export default Profile;