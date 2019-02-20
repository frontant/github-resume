import ActionType from "../actions/ActionType";

const createBlankState = () => ({
    isFetching: false,
    errorMessage: null,
    data: []
});

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
        case ActionType.RESET_REPOSITORIES:
            return createBlankState();
        default:
            return state;
    }
}

export default repositories;