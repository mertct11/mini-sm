const initState = {
    posts:null,
}

const menuReducer = (state = initState, action) => {
    switch (action.type) {

        case 'SET_POSTS':
            return {
                ...state,
                posts: action.payload, 
            } 
        default:
            return state; 
    }
}

export default menuReducer