import { DATE_SELECT } from "../Constants";

const initialState = {
    dateData: {},
};

export default function selDates(state = initialState, action) {
    switch (action.type) {
        case DATE_SELECT:
            return {
                ...state,
                dateData: action.data,
            };
            break;
        default:
            return state;
    }
}
