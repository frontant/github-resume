import ActionType from "./ActionType";
import Globals from "../Globals";
import ajaxRequest from "../ajaxRequest";

const receiveRepositories = (username, data) => ({
    type: ActionType.RECEIVE_REPOSITORIES,
    username,
    data
});

const fetchRepositoriesFailed = (username, errorMessage) => ({
    type: ActionType.FETCH_REPOSITORIES_FAILED,
    username,
    errorMessage
});

const cacheRepositories = (username, data) => ({
    type: ActionType.CACHE_REPOSITORIES,
    username,
    data
});

const fetchFromCacheRepositories = (username, data) => ({
    type: ActionType.FETCH_FROM_CACHE_REPOSITORIES,
    username,
    data
});

const responseToData = response => response.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description,
    website: item.html_url
}));

export const fetchRepositories = (username, maxReposCount = 5) => {
    return (dispatch, getState) => {
        let state = getState();
        let cachedData = state.cache.find(item =>
            item.repositories &&
            item.repositories.username == username);

        // load data from the cache if possible
        if(cachedData){
            return dispatch(fetchFromCacheRepositories(username, cachedData.repositories.data));
        }

        // otherwise fetch data from the server
        else{
            dispatch({ type:  ActionType.FETCH_REPOSITORIES });

            return new Promise((resolve, reject) => {
                let url = `${Globals.githubApiUrl}/users/${username}/repos?per_page=${maxReposCount}&page=1`
                ajaxRequest(url, resolve, reject);
            })
            .then(response => {
                let responsePart = response.slice(0, maxReposCount);
                let data = responseToData(responsePart);
    
                return Promise.all([
                    dispatch(receiveRepositories(username, data)),
                    dispatch(cacheRepositories(username, data))
                ]);
            })
            .catch(errMsg => dispatch(fetchRepositoriesFailed(username, errMsg)));
        }
    };
}

export const resetRepositories = () => ({
    type: ActionType.RESET_REPOSITORIES
});