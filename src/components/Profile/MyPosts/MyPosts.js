import React from 'react'
import s from './MyPosts.module.css';
import Post from './Post/Post';
import send from './../../../media/send2.svg'
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import PostContainer from "./Post/PostContainer";

// import {newPostInput} from '../../common/FormsControls/FormsControls'


const MyPosts = React.memo(props => {

    let postsElement = props.posts.map(p => <div key={p.id}><Post  name={p.name} date={p.date} time={p.time}
                                                  message={p.message} img={p.img}/></div>)
    // let newPostElement = React.createRef();

    let addNewPost = (values) => {
        values.newPostText && props.addPost(values.newPostText)
        values.newPostText = ''
    }

    return (
      <div className={s.posts}>
          <div className={s.create__post}>
              <div className={s.addPost}>
                  <AddPostFormRedux onSubmit={addNewPost}/>
              </div>
          </div>
          <div>
              {postsElement}
          </div>
      </div>
    );
})

// const maxLength10 =  maxLengthCreator(10)

const PostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit} className={s.addNewPostForm}>
          <div className={s.addNewPostTextareaBlock}>
              <Field validate={[required]} id={'newPostText'} component={'input'} name={'newPostText'}
                     placeholder='Что у вас нового?'
                     className={s.addNewPostTextarea} type={'text'}/>
          </div>
          <div className={s.addPostButtonBlock}>
              <button id={'addPostButton'} className={s.addPostButton}><img src={send} alt="s"/></button>
          </div>
      </form>

    )
}

const AddPostFormRedux = reduxForm({form: 'postsAddNewPost'})(PostForm)

export default MyPosts;