
import { combineReducers } from 'redux'
import todos from "../pages/todos/reducer"

const reducer = combineReducers({ todos })
export default reducer;