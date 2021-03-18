import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';
import joker from '../../../media/joker.jpg'

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
            <div className={s.dialog_item}>
                <div className={s.dialogPhoto}>
                    <img src={joker} alt="" />
                </div>
                <div className={s.dialogsItemRight}>
                    <div className={s.dialogName}>
                        <NavLink to={path} >{props.name}</NavLink>
                    </div>
                    <div className={s.shortMessage}>Привет да как там дела у тебя как у меня норм</div>
                </div>
            </div>
    )
}
export default DialogItem;