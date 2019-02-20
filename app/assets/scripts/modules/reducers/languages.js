import ActionType from "../actions/ActionType";

const updateLanguages = (state, data) => {
    let index = state.findIndex(item =>
        item.repositoryId == data.repositoryId);

    if(index < 0){
        return [...state, data];
    }else{
        let before = state.slice(0, index);
        let after = state.slice(index + 1);

        return [...before, data, ...after];
    }
}

const languages = (state = [], action) => {
    switch(action.type){
        case ActionType.FETCH_REPOSITORY_LANGUAGES:
            return updateLanguages(state, {
                repositoryId: action.repositoryId,
                isFetching: true,
                errorMessage: null,
                data: []
            });
        case ActionType.RECEIVE_REPOSITORY_LANGUAGES:
            return updateLanguages(state, {
                repositoryId: action.repositoryId,
                isFetching: false,
                errorMessage: null,
                data: action.data
            });
        case ActionType.FETCH_REPOSITORY_LANGUAGES_FAILED:
            return updateLanguages(state, {
                repositoryId: action.repositoryId,
                isFetching: false,
                errorMessage: action.errorMessage,
                data: []
            });
        default:
            return state;
    }
}

export default languages;