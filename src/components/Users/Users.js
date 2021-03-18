import React from 'react'
import s from './Users.module.css'
import defaultUserPhoto from '../../media/default/user.svg'

import Pagination from 'react-pagination-js'
import 'react-pagination-js/dist/styles.css'
import {NavLink} from 'react-router-dom'
import PreloaderNew from "../common/Preloader/PreloaderNew";


const Users = (props) => {
    return (
      <div className={s.users}>
          {props.isLoading ? <PreloaderNew/> :
            <div className={s.usersList}>
                {props.users.map((u) => (
                  <div className={s.userItem} key={u.id}>
                      <NavLink to={'/profile/' + u.id} className={s.userItemLink}>
                          <div className={s.userPhotoBlock}>
                              <img className={s.userPhoto} src={u.photos.small ? u.photos.small : defaultUserPhoto} alt={'User'}/>
                          </div>
                          <div className={s.userNameInfo}>
                              <NavLink className={s.userNameInfoLink} to={'/profile/' + u.id}>
                                  <div className={s.userFullname}>
                                      {u.name}
                                  </div>
                              </NavLink>
                              <div className={s.userStatus}>{u.status}</div>
                          </div>
                      </NavLink>
                      <div className={s.followButtonBlock}>
                          {u.followed
                            ? (<button disabled={props.followingInProgress.some(userId => userId === u.id)}
                                       onClick={() => {
                                           props.unfollow(u.id)
                                       }} className={s.followButton}>Отписаться</button>)
                            : (<button disabled={props.followingInProgress.some(userId => userId === u.id)}
                                       onClick={() => {
                                           props.follow(u.id)
                                       }} className={s.followButton}>Подписаться</button>)}
                      </div>
                  </div>
                ))}
                {/*<div className={s.buttonLoadMoreUsersBlock}>*/}
                {/*    <button className={s.buttonLoadMoreUsers} onClick={this.getUsers}>Ещё</button>*/}
                {/*</div>*/}
                <div className={s.usersPagination}>
                    <Pagination
                      currentPage={props.currentPage}
                      totalSize={props.totalUsersCount}
                      sizePerPage={props.pageSize}
                      changeCurrentPage={props.onPageChange}
                      theme="bootstrap"
                    />{/*https://www.npmjs.com/package/react-paginate*/}
                </div>
            </div>}
      </div>
    )
}

export default Users
