import ActionType from "../actions/ActionType";

const createBlankState = () => ({
    isFetching: false,
    errorMessage: null,
    data: {}
});

const dataToUserData = data => ({
    username: data.login,
    name: data.name,
    description: data.bio
})

const userData = (state = createBlankState(), action) => {
    switch(action.type){
        case ActionType.FETCH_USER_DATA:
            return {
                isFetching: true,
                errorMessage: null,
                data: {}
            };
        case ActionType.RECEIVE_USER_DATA:
            return {
                isFetching: false,
                errorMessage: null,
                data: dataToUserData(action.data)
            };
        case ActionType.FETCH_USER_DATA_FAILED:
            return {
                isFetching: false,
                errorMessage: action.errorMessage,
                data: {}
            };
        case ActionType.RESET_USER_DATA:
            return createBlankState();
        default:
            return state;
    }
}

export default userData;