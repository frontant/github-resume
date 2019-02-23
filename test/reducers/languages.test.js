    
import deepFreeze from "deep-freeze";
import reducer from "../../app/assets/scripts/modules/reducers/languages";
import ActionType from "../../app/assets/scripts/modules/actions/ActionType";

describe("reducer-languages", () => {
    it("should handle RECEIVE_REPOSITORY_LANGUAGES action", () => {
        const stateBefore = [
            {
                repositoryId: "kh123k",
                isFetching: false,
                errorMessage: null,
                data: [ "CSS", "Html", "Javascript" ]
            },
            {
                repositoryId: "sdfr3sy",
                isFetching: false,
                errorMessage: null,
                data: [ "CSS", "Javascript", "PHP" ]
            }
        ]
        const stateAfter = [
            {
                repositoryId: "kh123k",
                isFetching: false,
                errorMessage: null,
                data: [ "CSS", "Html", "Javascript" ]
            },
            {
                repositoryId: "sdfr3sy",
                isFetching: false,
                errorMessage: null,
                data: [ "C++", "PHP", "Python" ]
            }
        ];

        const action = {
            type: ActionType.RECEIVE_REPOSITORY_LANGUAGES,
            repositoryId: "sdfr3sy",
            data: [ "C++", "PHP", "Python" ]
        }

        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
});