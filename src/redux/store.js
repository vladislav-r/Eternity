import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {

    _state: {
        profilePage: {
            posts: [{
                id: 1,
                name: 'Владислав Чернышев',
                message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora consectetur accusamus quisquam est iste. Deserunt iste incidunt perferendis illo fugit.',
                img: 'https://via.placeholder.com/50',
                date: '5 июл 2020'
            },
                {
                    id: 2,
                    name: 'Георгий Новиков',
                    message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                    img: 'https://via.placeholder.com/50',
                    date: '5 июл 2020'
                },
                {
                    id: 3,
                    name: 'Никита Зайцев',
                    message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora consectetur accusamus quisquam est iste. Deserunt iste incidunt perferendis illo fugit.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora consectetur accusamus quisquam est iste. Deserunt iste incidunt perferendis illo fugit.',
                    img: 'https://via.placeholder.com/50',
                    date: '5 июл 2020'
                },
                {
                    id: 4,
                    name: 'Сергей Мезенцев',
                    message: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora consectetur accusamus quisquam est iste. Deserunt iste incidunt perferendis illo fugit.Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                    img: 'https://via.placeholder.com/50',
                    date: '5 июл 2020'
                }
            ],
            newPostText: ""
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'блаблабла'},
                { id: 2, message: 'как дела'},
                { id: 3, message: 'привет'},
                { id: 4, message: 'вау'},
                { id: 5, message: 'че в кино'}
            ],
            dialogs: [
                { id: 1, name: "Влад"},
                { id: 2, name: "Сергей"},
                { id: 3, name: "Никита"},
                { id: 4, name: "Сталина"},
                { id: 5, name: "Настя"},
                { id: 6, name: "Катя"}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },

    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; // паттерн наблюдатель
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

export const addPostActionCreator = () =>
    ({
        type: ADD_POST
    })

export const updateNewPostTextActionCreator = (newText) =>
    ({
        type: UPDATE_NEW_POST_TEXT, newText: newText
    })


export const sendMessageCreator = () =>
    ({
        type: SEND_MESSAGE
    })

export const updateNewMessageTextCreator = (messageText) =>
    ({
        type: UPDATE_NEW_MESSAGE_TEXT, messageText: messageText
    })


export default store;