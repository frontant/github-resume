import ActionType from "../actions/ActionType";

const updateUserData = (state, userData) => {
    let index = state.findIndex(item =>
        item.userData &&
        item.userData.data.username == userData.username);
    
    // set userData only and delete the leftover
    let newItem = { userData: { data: userData } }

    if(index < 0){
        return [...state, newItem];
    }

    let before = state.slice(0, index);
    let after = state.slice(index + 1);

    return [...before, ...after, newItem];
}

const updateRepositories = (state, username, data) => {
    let index = state.findIndex(item =>
        item.userData &&
        item.userData.data.username == username);

    if(index < 0){
        return state;
    }
    
    let item = state[index];
    let newItem = { ...item, ...{ repositories: { username, data } } };

    let before = state.slice(0, index);
    let after = state.slice(index + 1);

    return [...before, newItem, ...after];
}

const updateLanguagesInStateItem = (stateItem, repositoryId, data) => {
    if(!stateItem.languages){
        return { ...stateItem, languages: [ { repositoryId, data } ] }
    }

    let index = stateItem.languages.findIndex(item => item.repositoryId == repositoryId);

    if(index < 0){
        return { ...stateItem, languages: [ ...stateItem.languages, { repositoryId, data } ] };
    }

    let before = stateItem.languages.slice(0, index);
    let after = stateItem.languages.slice(index + 1);

    return { ...stateItem, languages: [ ...before, { repositoryId, data }, ...after ] };
}

const findStateItemIndexByRepositoryId = (state, repositoryId) => {
    let index = -1;
    for(let i = 0; i < state.length && index < 0; i++){
        let repositories = state[i].repositories;
        if(repositories.data.find(item => item.id == repositoryId)){
            index = i;
        }
    }
    return index;
}

const updateLanguages = (state, repositoryId, data) => {
    let index = findStateItemIndexByRepositoryId(state, repositoryId);

    if(index < 0){
        return state;
    }
    
    let stateItem = state[index];
    let newItem = updateLanguagesInStateItem(stateItem, repositoryId, data);

    let before = state.slice(0, index);
    let after = state.slice(index + 1);

    return [...before, newItem, ...after];
}

const cache = (state = [], action) => {
    switch(action.type){
        case ActionType.CACHE_USER_DATA:
            return updateUserData(state, action.data);
        case ActionType.CACHE_REPOSITORIES:
            return updateRepositories(state, action.username, action.data);
        case ActionType.CACHE_REPOSITORY_LANGUAGES:
            return updateLanguages(state, action.repositoryId, action.data);
        default:
            return state;
    }
}

export default cache;