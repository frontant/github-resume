import ActionType from "./ActionType";
import Globals from "../Globals";
import ajaxRequest from "../ajaxRequest";

const receiveRepositories = data => ({
    type: ActionType.RECEIVE_REPOSITORIES,
    data
});

const fetchRepositoriesFailed = errorMessage => ({
    type: ActionType.FETCH_REPOSITORIES_FAILED,
    errorMessage
});

export const fetchRepositories = (username, maxReposCount = 5) => {
    return dispatch => {
        dispatch({ type:  ActionType.FETCH_REPOSITORIES });

        return new Promise((resolve, reject) => {
            let url = `${Globals.githubApiUrl}/users/${username}/repos?per_page=${maxReposCount}&page=1`
            ajaxRequest(url, resolve, reject);
        })
        .then(response => dispatch(receiveRepositories(
            response.slice(0, maxReposCount),
            maxReposCount)))
        .catch(errMsg => dispatch(fetchRepositoriesFailed(errMsg)));
    };
}

export const resetRepositories = () => ({
    type: ActionType.RESET_REPOSITORIES
});