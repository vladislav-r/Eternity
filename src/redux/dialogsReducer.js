const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Вот так будет выглядеть сообщение'}
    ],
    dialogs: [
        {id: 1, name: "Влад"},
        {id: 2, name: "Сергей"},
        {id: 3, name: "Никита"},
        {id: 4, name: "Сталина"},
        {id: 5, name: "Настя"},
        {id: 6, name: "Катя"},
        {id: 7, name: "Катя"},
        {id: 8, name: "Катя"},
        {id: 9, name: "Катя"},
        {id: 9, name: "Катя"},
        {id: 9, name: "Катя"},
        {id: 9, name: "Катя"},
        {id: 9, name: "Катя"},
        {id: 9, name: "Катя"},
        {id: 9, name: "Катя"},
        {id: 9, name: "Катя"},
        {id: 9, name: "Катя"},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {...state, messages: [ {id: 2, message: action.newMessageText}, ...state.messages]}
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageText: newMessageBody})

export default dialogsReducer;