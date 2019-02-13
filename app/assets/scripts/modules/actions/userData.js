import Globals from "../Globals";
import ActionType from "./ActionType";
import ajaxRequest from "../ajaxRequest";

const receiveUserData = data => ({
    type: ActionType.RECEIVE_USER_DATA,
    data
});

const fetchUserDataFailed = errorMessage => ({
    type: ActionType.FETCH_USER_DATA_FAILED,
    errorMessage
});

export const fetchUserData = username => {
    return dispatch => {
        dispatch({ type: ActionType.FETCH_USER_DATA });

        return new Promise((resolve, reject) => {
            let url = `${Globals.githubApiUrl}/users/${username}`
            ajaxRequest(url, resolve, reject);
        })
        .then(response => dispatch(receiveUserData(response)))
        .catch(errorMsg => dispatch(fetchUserDataFailed(errorMsg)));
    }
}

export const resetUserData = () => ({
    type: ActionType.RESET_USER_DATA
});