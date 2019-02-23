import deepFreeze from "deep-freeze";
import reducer from "../../app/assets/scripts/modules/reducers/repositories";
import ActionType from "../../app/assets/scripts/modules/actions/ActionType";

describe("reducer-repositories", () => {

    it("should handle RECEIVE_REPOSITORIES action", () => {
        const stateBefore = {
            username: "friend",
            isFetching: false,
            errorMessage: null,
            data: []
        };

        const stateAfter = {
            username: "friend",
            isFetching: false,
            errorMessage: null,
            data: [
                {
                    id: "kh123k",
                    name: "",
                    description: "",
                    website: ""
                },
                {
                    id: "82jd9jk",
                    name: "",
                    description: "",
                    website: ""
                }
            ]
        };

        const action = {
            type: ActionType.RECEIVE_REPOSITORIES,
            username: "friend",
            data: [
                {
                    id: "kh123k",
                    name: "",
                    description: "",
                    website: ""
                },
                {
                    id: "82jd9jk",
                    name: "",
                    description: "",
                    website: ""
                }
            ]
        };

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
});