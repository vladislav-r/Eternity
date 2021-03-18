import s from './Dialogs.module.css';
import React from 'react'
import {Redirect} from 'react-router-dom'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import send2 from "../../media/send2.svg";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";

import defaultAva from '../../media/default/user.svg'

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let messagesElements = state.messages
      .map(m => <Message message={m.message} key={m.id}/>)


    let addNewMessage = (values) => {
        values.newMessageBody && props.sendMessage(values.newMessageBody)
        values.newMessageBody = ''
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
      <div className={s.dialogs}>
          <div className={s.dialogs__items}>
              {state.dialogs.map(d => <div className={s.dialogsItem}><DialogItem name={d.name} key={d.id} id={d.id}/>
              </div>)}
          </div>
          <div className={s.messages}>
              <div className={s.messageCompanionInfo}>
                  <div className={s.messageCompanionInfoPhotoBlock}><img className={s.messageCompanionInfoPhoto} src={defaultAva} alt=""/></div>
                  <div className={s.messageCompanionInfoName}>Владислав Чернышев</div>
              </div>
              <div className={s.messages__items}>
                  {state.messages.map(m =>
                    <Message message={m.message} key={m.id}/>
                  )}
              </div>
              <div className={s.createNewMsg}>
                  <AddMessageFormRedux onSubmit={addNewMessage}/>
              </div>
          </div>
          <div className={s.companionInfo}>
              <div className={s.companionInfoBlock}>

              </div>
          </div>
      </div>
    )
}

const AddMessageForm = (props) => {

    return (
      <form onSubmit={props.handleSubmit} className={s.addMessageForm}>
          <div className={s.addMessageTextareaBlock}>
              <Field validate={[required]} name={'newMessageBody'} component={'input'} className={s.addMessageTextarea}
                     placeholder='Сообщение'/>
          </div>
          <div className={s.addMessageButtonBlock}>
              <button className={s.addMessageButton}><img src={send2} alt={''}/></button>
          </div>
      </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;