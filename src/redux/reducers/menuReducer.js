const initState = {
    menuType: null,
}

const menuReducer = (state = initState, action) => {
    switch (action.type) {

        case 'SET_MENU':
            return {
                ...state,
                menuType: action.payload, 
            } 
        default:
            return state; 
    }
}

export default menuReducer