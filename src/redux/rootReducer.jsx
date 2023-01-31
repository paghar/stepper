import {combineReducers} from "redux";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({   
    userState: userReducer,    
});

export default rootReducer;
