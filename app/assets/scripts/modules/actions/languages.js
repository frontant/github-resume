import Globals from "../Globals";
import ActionType from "./ActionType";
import ajaxRequest from "../ajaxRequest";

const receiveLanguages = (repositoryId, data) => ({
    type: ActionType.RECEIVE_REPOSITORY_LANGUAGES,
    repositoryId,
    data
})

const fetchLanguagesFailed = (repositoryId, errorMessage) => ({
    type: ActionType.FETCH_REPOSITORY_LANGUAGES_FAILED,
    repositoryId,
    errorMessage
})

export const fetchLanguages = repositoryId => {
    return dispatch => {
        dispatch({
            type: ActionType.FETCH_REPOSITORY_LANGUAGES,
            repositoryId
        });

        return new Promise((resolve, reject) => {
            let url = `${Globals.githubApiUrl}/repositories/${repositoryId}/languages`;
            ajaxRequest(url, resolve, reject);
        })
        .then(response => {
            let data = Object.keys(response);
            return dispatch(receiveLanguages(repositoryId, data));
        })
        .catch(errorMessage => dispatch(fetchLanguagesFailed(repositoryId, errorMessage)));
    }
}