import { Types } from "../actions";

export default function (state = false, action) {
    switch (action.type) {
        case Types.SelectSession:
            return false;
        case Types.NotFound:
            return action.payload;
    }
    return state;
}