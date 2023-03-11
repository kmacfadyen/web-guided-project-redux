import { combineReducers } from "redux";
import dragonListReducer from "./dragonListReducer";
import titleReducer from "./titleReducer";

// Creating store


export const rootReducer = combineReducers({
    dragonList: dragonListReducer,
    title: titleReducer
})