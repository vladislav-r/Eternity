import s from './Header.module.css'
import logo from '../../media/logo/telegram.svg'
import {NavLink} from "react-router-dom";
import profile from "../../media/nav/profile.svg";
import messenger from "../../media/nav/messenger.svg";
import friends from "../../media/nav/friends.svg";
import defaultProfilePhoto from '../../media/default/user.svg'
import loupe from '../../media/nav/loupe.svg'
import React from 'react'


const Header = React.memo((props) => {
    return (
        <header className={s.header}>
            <div className={s.headerInner}>
                <div className={s.headerLeft}>
                    <NavLink to='/'>
                        <img src={logo} className={s.logo} alt={''}/>
                    </NavLink>
                    <form className={s.searchInputForm} method='GET'>
                        <input className={s.searchInput} spellCheck='false' type="text" placeholder="Поиск.."/>
                        <div className={s.searchInputIconBlock}><img className={s.searchInputIcon} src={loupe} alt=""/>
                        </div>
                    </form>
                </div>
                <div className={s.headerCenter}>
                    <nav className={s.headerNav}>
                        <NavLink activeClassName={s.navItemLink_active} to="/profile"
                                 className={s.navItemLink}>
                            <img className={s.navItemImg} src={profile} alt=""/>
                            <span className={s.navItemLinkTooltip}>Профиль</span>
                        </NavLink>
                        <NavLink activeClassName={s.navItemLink_active} to="/dialogs"
                                 className={s.navItemLink}>
                            <img className={s.navItemImg} src={messenger} alt=""/>
                            <span className={s.navItemLinkTooltip}>Сообщения</span>
                        </NavLink>

                        <NavLink activeClassName={s.navItemLink_active} to="/users"
                                 className={s.navItemLink}>
                            <img className={s.navItemImg} src={friends} alt=""/>
                            <span className={s.navItemLinkTooltip}>Подписки</span>
                        </NavLink>
                    </nav>
                </div>
                <div className={s.headerRight}>
                    {props.isAuth ?

                        <NavLink to={'/profile'} className={s.profileBlock}>
                            {props.photos &&
                            <div className={s.headerUserPhotoBlock}>
                                <img alt={''} className={s.headerUserPhoto}
                                     src={props.photos.small ? props.photos.small : defaultProfilePhoto}/>
                            </div>}
                            <div className={s.headerUserNameBlock}>
                                <div className={s.headerUserName}>{props.fullName}</div>
                            </div>
                            <div className={s.dropProfileMenu} id={'logoutBlock'}>
                                <div className={s.logoutButtonBlock}>
                                    <button onClick={props.logout} className={s.logoutButton}>Выйти</button>
                                </div>
                            </div>
                            {/*{props.isAuth ? <NavLink to={'/profile'}>{props.fullName}</NavLink> : <NavLink to={'/login'}>Войти</NavLink>}*/}
                        </NavLink>
                        : <NavLink to={'/login'}>Войти</NavLink>}
                    {/*<div>*/}
                    {/*    <button onClick={props.changeTheme}>Тема</button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </header>
    );
})

export default Header