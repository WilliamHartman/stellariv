
const initialState = {
    userData: {},
    projects: {
        past: [],
        present: [],
        future: []
    }
}
 
const UPDATE_USERDATA = 'UPDATE_USERDATA'; 


export function updateUserData(user){
    return {
        type: UPDATE_USERDATA,
        payload: user
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type){
        case UPDATE_USERDATA + '_FULFILLED':
            return Object.assign({}, state, {userData: action.payload});

        default: 
            return state;
    }
}