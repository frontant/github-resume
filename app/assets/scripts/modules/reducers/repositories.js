import ActionType from "../actions/ActionType";

const createBlankState = () => ({
    username: "",
    isFetching: false,
    errorMessage: null,
    data: []
});

const repositories = (state = createBlankState(), action) => {
    switch(action.type){
        case ActionType.FETCH_REPOSITORIES:
            return {
                username: action.username,
                isFetching: true,
                errorMessage: null,
                data: []
            };
        case ActionType.FETCH_FROM_CACHE_REPOSITORIES:
        case ActionType.RECEIVE_REPOSITORIES:
            return {
                username: action.username,
                isFetching: false,
                errorMessage: null,
                data: action.data
            };
        case ActionType.FETCH_REPOSITORIES_FAILED:
            return {
                username: action.username,
                isFetching: true,
                errorMessage: action.errorMessage,
                data: []
            };
        case ActionType.RESET_REPOSITORIES:
            return createBlankState();
        default:
            return state;
    }
}

export default repositories;