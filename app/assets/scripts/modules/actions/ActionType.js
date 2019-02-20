const ActionType = {
    FETCH_USER_DATA: "FETCH_USER_DATA",
    FETCH_REPOSITORIES: "FETCH_REPOSITORIES",
    FETCH_REPOSITORY_LANGUAGES: "FETCH_REPOSITORY_LANGUAGES",

    RECEIVE_USER_DATA: "RECEIVE_USER_DATA",
    RECEIVE_REPOSITORIES: "RECEIVE_REPOSITORIES",
    RECEIVE_REPOSITORY_LANGUAGES: "RECEIVE_REPOSITORY_LANGUAGES",

    FETCH_USER_DATA_FAILED: "FETCH_USER_DATA_FAILED",
    FETCH_REPOSITORIES_FAILED: "FETCH_REPOSITORIES_FAILED",
    FETCH_REPOSITORY_LANGUAGES_FAILED: "FETCH_REPOSITORY_LANGUAGES_FAILED",

    RESET_USER_DATA: "RESET_USER_DATA",
    RESET_REPOSITORIES: "RESET_REPOSITORIES",

    FETCH_FROM_CACHE_USER_DATA: "FETCH_FROM_CACHE_USER_DATA",
    FETCH_FROM_CACHE_REPOSITORIES: "FETCH_FROM_CACHE_REPOSITORIES",
    FETCH_FROM_CACHE_REPOSITORY_LANGUAGES: "FETCH_FROM_CACHE_REPOSITORY_LANGUAGES",

    CACHE_USER_DATA: "CACHE_USER_DATA",
    CACHE_REPOSITORIES: "CACHE_REPOSITORIES",
    CACHE_REPOSITORY_LANGUAGES: "CACHE_REPOSITORY_LANGUAGES"
};

export default ActionType;