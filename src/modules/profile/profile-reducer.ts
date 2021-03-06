import {
    REMOVE_PROFILE_DATA,
    SET_ERROR_FETCH_PROFILE,
    SET_PROFILE,
    TProfileActions,
    TProfileState
} from "./profile-types";

const initialState = {
    data: null,
    error: false,
    isFetching: true,
};

export const profileReducer = (
    state: TProfileState = initialState,
    action: TProfileActions,
) => {
    if (action.type === SET_PROFILE) {
        return {
            ...state,
            data: action.data,
            isFetching: false,
        }
    }

    if (action.type === SET_ERROR_FETCH_PROFILE) {
        return {
            ...state,
            error: true,
        }
    }

    if (action.type === REMOVE_PROFILE_DATA) {
        return {
            ...state,
            data: null,
        }
    }

    return state;
}