import ActionType from "../actions/ActionType";

const createBlankState = () => ({
    isFetching: false,
    errorMessage: null,
    data: []
});

const updateRepositoryLanguages = (state, repositoryId, data) => {
    let repositoryIndex = state.data.findIndex(repository => repository.id == repositoryId);

    if(repositoryIndex > -1){
        let before = state.data.slice(0, repositoryIndex);
        let after = state.data.slice(repositoryIndex + 1);
        let updatedRepo = { ...state.data[repositoryIndex], ...{ languages: data } };

        return { ...state, ...{ data: [ ...before, updatedRepo, ...after ] } };
    }else{
        return state;
    }
}

const repositoryLanguages = (state, action) => {
    switch(action.type){
        case ActionType.FETCH_REPOSITORY_LANGUAGES:
            return updateRepositoryLanguages(state, action.repositoryId, {
                isFetching: true,
                errorMessage: null,
                data: []
            });
        case ActionType.RECEIVE_REPOSITORY_LANGUAGES:
            return updateRepositoryLanguages(state, action.repositoryId, {
                isFetching: false,
                errorMessage: null,
                data: Object.keys(action.data)
            });
    case ActionType.FETCH_REPOSITORY_LANGUAGES_FAILED:
            return updateRepositoryLanguages(state, action.repositoryId, {
                isFetching: false,
                errorMessage: action.errorMessage,
                data: []
            });
    }
}

const repositories = (state = createBlankState(), action) => {
    switch(action.type){
        case ActionType.FETCH_REPOSITORIES:
            return {
                isFetching: true,
                errorMessage: null,
                data: []
            };
        case ActionType.FETCH_FROM_CACHE_REPOSITORIES:
        case ActionType.RECEIVE_REPOSITORIES:
            return {
                isFetching: false,
                errorMessage: null,
                data: action.data
            };
        case ActionType.FETCH_REPOSITORIES_FAILED:
            return {
                isFetching: true,
                errorMessage: action.errorMessage,
                data: []
            };
        case ActionType.FETCH_REPOSITORY_LANGUAGES:
        case ActionType.RECEIVE_REPOSITORY_LANGUAGES:
        case ActionType.FETCH_REPOSITORY_LANGUAGES_FAILED:
            return repositoryLanguages(state, action);
        case ActionType.RESET_REPOSITORIES:
            return createBlankState();
        default:
            return state;
    }
}

export default repositories;