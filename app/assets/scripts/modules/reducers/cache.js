import ActionType from "../actions/ActionType";

const updateUserData = (state, userData) => {
    let index = state.findIndex(item =>
        item.userData.data.username == userData.username);
    
    let ret = {
        userData: {
            data: userData
        }
    }

    if(index < 0){
        return [...state, ret];
    }

    let before = state.slice(0, index);
    let after = state.slice(index + 1);

    return [...before, ...after, ret];
}

const updateRepositories = (state, username, repositories) => {
    let index = state.findIndex(item =>
        item.userData.data.username == username);

    if(index < 0){
        return state;
    }
    
    let item = state[index];
    let ret = {
        userData: item.userData,
        repositories: {
            username,
            data: repositories
        }
    }

    let before = state.slice(0, index);
    let after = state.slice(index + 1);

    return [...before, ret, ...after];
}

const cache = (state=[], action) => {
    switch(action.type){
        case ActionType.CACHE_USER_DATA:
            return updateUserData(state, action.data);
        case ActionType.CACHE_REPOSITORIES:
            return updateRepositories(state, action.username, action.data);
        default:
            return state;
    }
}

export default cache;