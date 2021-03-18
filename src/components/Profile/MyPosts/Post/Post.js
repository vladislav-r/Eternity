import s from './Post.module.css';
import like from '../../../../media/logo/like.svg'
import comm from '../../../../media/mini/comm.svg'
import {NavLink} from 'react-router-dom';
import {deletePost} from "../../../../redux/profileReducer";

const Post = (props) => {

    const clickOnButtonDeletePost = (e) => {
        deletePost(e.currentTarget.id)
    }

    return (
      <div className={s.item}>
          <header className={s.postHeader}>
              <div className={s.postHeaderLeft}>
                  <div className={s.ava}>
                      <img className={s.photo} src={props.img} alt=""/>
                  </div>
                  <div className={s.author}>
                      <div className={s.name}><NavLink to={'/profile/'}>{props.name}</NavLink></div>
                      <div className={s.datetime}>
                          <div className={s.date}><NavLink to={'/profile/'}>{props.date}</NavLink></div>
                          <div className={s.time}><NavLink to={'/profile/'}>{props.time}</NavLink></div>
                      </div>
                  </div>
              </div>
              <div className={s.postHeaderRight}>
                  <div className={s.deletePostButtonBlock}>
                      <button  className={s.deletePostButton}>&#10006;</button>
                      <span onClick={clickOnButtonDeletePost} id={new Date().getMilliseconds().toString()} className={s.postDeleteTooltip}>Удалить</span>
                  </div>
              </div>
          </header>
          <div className={s.content}>
              <p>{props.message}</p>
          </div>
          <footer className={s.footer}>
              <div className={s.marking}>
                  <button className={s.btn__like}><img id='like' src={like} alt="like"/></button>
                  <button className={s.btn__comm}><img src={comm} alt="like"/></button>
              </div>
          </footer>
      </div>
    );
}

export default Post;