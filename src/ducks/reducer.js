import axios from 'axios';

const initialState = {
    userData: {},
    projects: [
        {
            title: 'Test Project',
            description: 'This is a test product. See how shiny and awesome it is? BUY IT NOW!',
            image: '',
            status: 'present'
        }],
    news: [
        {
            title: 'Test News Article',
            content: 'This is a test article. It is about how amazing this website is. Someone should totally hire the developer who made it.',
            user: 'william'
        }
    ]
}
 
const UPDATE_USER_DATA = 'UPDATE_USER_DATA'; 


export function updateUserData(username, password){
    const data = axios.post('/authorize', {username, password})
        .then(result => result.data);
    return {
        type: UPDATE_USER_DATA,
        payload: data
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type){
        case UPDATE_USER_DATA + '_FULFILLED':
            return Object.assign({}, state, {userData: action.payload});

        default: 
            return state;
    }
}