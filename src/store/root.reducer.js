/**
 * Configure root reducer
 */
import { combineReducers } from 'redux'

import phoneReducer from './phone/phone.reducer'
import userReducer from './user/user.reducer'
import messageReducer from './message/message.reducer'

const rootReducer = combineReducers({
  phoneReducer,
  userReducer,
  messageReducer
})

export default rootReducer
