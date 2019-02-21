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

const cacheLanguages = (repositoryId, data) => ({
    type: ActionType.CACHE_REPOSITORY_LANGUAGES,
    repositoryId,
    data
})

const fetchFromCacheLanguages = (repositoryId, data) => ({
    type: ActionType.FETCH_FROM_CACHE_REPOSITORY_LANGUAGES,
    repositoryId,
    data
})

const findCachedData = (state, repositoryId) => {
    let cachedData;
    for(let i = 0; i < state.cache.length && !cachedData; i++){
        let languages = state.cache[i].languages;
        if(languages){
            cachedData = languages.find(item => item.repositoryId == repositoryId);
        }
    }
    return cachedData;
}

export const fetchLanguages = repositoryId => {
    return (dispatch, getState) => {
        let state = getState();
        let cachedData = findCachedData(state, repositoryId);

        // load data from the cache if possible
        if(cachedData){
            return dispatch(fetchFromCacheLanguages(
                cachedData.repositoryId,
                cachedData.data));
        }

        // otherwise fetch the data from the server
        else{
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
                return Promise.all([
                    dispatch(receiveLanguages(repositoryId, data)),
                    dispatch(cacheLanguages(repositoryId, data))
                ]);
            })
            .catch(errorMessage => dispatch(fetchLanguagesFailed(repositoryId, errorMessage)));
        }
    }
}

export const resetLanguages = () => ({
    type: ActionType.RESET_REPOSITORY_LANGUAGES
});