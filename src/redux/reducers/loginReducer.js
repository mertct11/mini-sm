const initState = { 
    menuType: '',
    users: [],
    user: null,
}

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_DUMMY_USERS":
            return {
                ...state,
                users: action.payload,
            }
        case "CHOOSE_A_USER":
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;

    }
}

export default loginReducer