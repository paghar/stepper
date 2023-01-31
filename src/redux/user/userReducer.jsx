import {
    UPDATE_USERS_REQUEST,
    UPDATE_FROM_STEP
} from "./userTypes";

const initialState = {    
    users:{},
    formStep: 1  
};

const updateUserInfo = (state,action) => {
    switch (state.formStep) {
        case 1:
            return(
                {
                    ...state.users,
                    name: action?.payload?.name,
                    email: action?.payload?.email,
                    phone: action?.payload?.phone,
                    gender: action?.payload?.gender,
                }
            );            
        case 2:
            return(
                {
                    ...state.users,
                    brithDay:action?.payload?.brithDay,
                    address:action?.payload?.address,
                    height:action?.payload?.height,
                    weight:action?.payload?.weight,
                    spokenLanguage:action?.payload?.spokenLanguage,
                } 
            );
        case 3:
            return(
                {
                    ...state.users,
                    condation:action?.payload?.condation,                    
                } 
            );
        default:
            return state;
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) { 

        case UPDATE_USERS_REQUEST: 
            return {
                ...state,
                users: updateUserInfo(state,action)
            };     

        case UPDATE_FROM_STEP:                    
            return {  
                ...state,            
                formStep: action.payload,               
            };                  
            
        default: return state;
    }
};

export default reducer;


