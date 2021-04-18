  
export const addDummyUsers = (userArray) => {
    return async function (dispatch) {
        dispatch({
            type: "ADD_DUMMY_USERS",
            payload:userArray,
        });
    }
}
export const setMenuType = (menu) => {
    return async function (dispatch) {
        dispatch({
            type: "SET_MENU",
            payload:menu,
        });
    }
} 

export const setUser = (user) => {
    return async function (dispatch) {
        dispatch({
            type: "CHOOSE_A_USER",
            payload:user,
        });
    }
} 

export const setPosts = (posts) => {
    return async function (dispatch) {
        dispatch({
            type: "SET_POSTS",
            payload:posts,
        });
    }
} 

