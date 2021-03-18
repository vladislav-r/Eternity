import s from './Message.module.css';

const Message = (props) => {
    return (
      <div className={s.messageItem}>
          <div className={s.messageItemBlock}>
              <div className={s.messageItemText}>{props.message}</div>
          </div>
      </div>
    )
}
export default Message;