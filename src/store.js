import { legacy_createStore as createStore } from "redux";
import RootReducer from "./reducer";


const store = createStore(RootReducer);



export default store;