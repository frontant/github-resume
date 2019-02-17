import deepFreeze from "deep-freeze";
import reducer from "./repositories";
import ActionType from "../actions/ActionType";

const stateBefore = {
    isFetching: false,
    errorMessage: null,
    data: [
        {
            id: "kh123k",
            name: "",
            description: "",
            website: "",
            languages: {
                isFetching: false,
                errorMessage: null,
                data: []
            }
        },
        {
            id: "sdfr3sy",
            name: "",
            description: "",
            website: "",
            languages: {
                isFetching: false,
                errorMessage: null,
                data: []
            }
        },
        {
            id: "jsd732k",
            name: "",
            description: "",
            website: "",
            languages: {
                isFetching: false,
                errorMessage: null,
                data: []
            }
        }
    ]
};

describe("reducer-repositories", () => {

    it("should handle RECEIVE_REPOSITORIES action", () => {
        const stateAfter = {
            isFetching: false,
            errorMessage: null,
            data: [
                {
                    id: "ihih234",
                    name: "",
                    description: "",
                    website: "",
                    languages: {
                        isFetching: false,
                        errorMessage: null,
                        data: []
                    }
                },
                {
                    id: "skhd723",
                    name: "",
                    description: "",
                    website: "",
                    languages: {
                        isFetching: false,
                        errorMessage: null,
                        data: []
                    }
                }
            ]
        };

        const action = {
            type: ActionType.RECEIVE_REPOSITORIES,
            data: [
                {
                    id: "ihih234",
                    name: "",
                    description: "",
                    html_url: "",
                    languages: {
                        isFetching: false,
                        errorMessage: null,
                        data: []
                    }
                },
                {
                    id: "skhd723",
                    name: "",
                    description: "",
                    html_url: "",
                    languages: {
                        isFetching: false,
                        errorMessage: null,
                        data: []
                    }
                }
            ]
        }

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
    
    it("should handle RECEIVE_REPOSITORY_LANGUAGES action", () => {
        const stateAfter = {
            isFetching: false,
            errorMessage: null,
            data: [
                {
                    id: "kh123k",
                    name: "",
                    description: "",
                    website: "",
                    languages: {
                        isFetching: false,
                        errorMessage: null,
                        data: []
                    }
                },
                {
                    id: "sdfr3sy",
                    name: "",
                    description: "",
                    website: "",
                    languages: {
                        isFetching: false,
                        errorMessage: null,
                        data: ["C++", "PHP", "Python"]
                    }
                },
                {
                    id: "jsd732k",
                    name: "",
                    description: "",
                    website: "",
                    languages: {
                        isFetching: false,
                        errorMessage: null,
                        data: []
                    }
                }
            ]
        }

        const action = {
            type: ActionType.RECEIVE_REPOSITORY_LANGUAGES,
            repositoryId: "sdfr3sy",
            data: { "C++": "1", "PHP": "2", "Python": "3" }
        }

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
});