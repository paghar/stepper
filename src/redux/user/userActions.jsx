import {
    UPDATE_USERS_REQUEST,
    UPDATE_FROM_STEP 
} from "./userTypes";

//******************* Actions *******************
export const addUsersRequest = (data) => {
    return {
        type: UPDATE_USERS_REQUEST,
        payload: data
    };
};

export const updateFromStep = (formStep) => {
    return {
        type: UPDATE_FROM_STEP,
        payload: formStep
    };
};








