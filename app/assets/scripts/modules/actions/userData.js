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

const cacheUserData = data => ({
    type: ActionType.CACHE_USER_DATA,
    data
});

const fetchFromCacheUserData = data => ({
    type: ActionType.FETCH_FROM_CACHE_USER_DATA,
    data
});

const responseToUserData = response => ({
    username: response.login,
    name: response.name,
    description: response.bio
});

export const fetchUserData = username => {
    return (dispatch, getState) => {
        let state = getState();
        let cachedData = state.cache.find(item =>
            item.userData &&
            item.userData.data.username == username);

        // load data from the cache if possible
        if(cachedData){
            return dispatch(fetchFromCacheUserData(cachedData.userData.data));
        }
        
        // otherwise fetch data from the server
        else{
            dispatch({ type: ActionType.FETCH_USER_DATA });

            return new Promise((resolve, reject) => {
                let url = `${Globals.githubApiUrl}/users/${username}`
                ajaxRequest(url, resolve, reject);
            })
            .then(response => {
                let data = responseToUserData(response);

                return Promise.all([
                    dispatch(receiveUserData(data)),
                    dispatch(cacheUserData(data))
                ]);
            })
            .catch(errorMsg => dispatch(fetchUserDataFailed(errorMsg)));
        }
    }
}

export const resetUserData = () => ({
    type: ActionType.RESET_USER_DATA
});