import profileReducer, {addPost, deletePost} from "./profileReducer";

import defaultUserPhoto from "../media/default/user.svg";

let state = {
    posts: [
        {
            id: 1,
            name: 'Владислав Чернышев',
            message:
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora consectetur accusamus quisquam est iste. Deserunt iste incidunt perferendis illo fugit.',
            img: defaultUserPhoto,
            date: '15 марта 2020 г.',
            time: '14:45',
        },
    ],
}


test('length of posts should be incremenent', () => {
    let action = addPost('blablabla')
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
});

test('deleting post success', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(0)
});

test('deleting post dont be success', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(1)
});



