import ActionType from "../actions/ActionType";

const updateUserData = (state, userData) => {
    let index = state.findIndex(item =>
        item.userData.data.username == userData.username);

    let before = state.slice(0, index);
    let after = state.slice(index + 1);

    return [...before, ...after, {
        userData: {
            data: userData
        }
    }];
}

const cache = (state=[], action) => {
    switch(action.type){
        case ActionType.CACHE_USER_DATA:
            return updateUserData(state, action.data);
        default:
            return state;
    }
}

export default cache;