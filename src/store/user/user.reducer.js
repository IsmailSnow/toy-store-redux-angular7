import { USER_ACTIONS } from './user.actions'
import defaultUserState from './user'

function userReducer(state = defaultUserState, action) {
  switch (action.type) {
  case USER_ACTIONS.ADD_NAME:
    return { ...state, name: action.name }

  default:
    return state
  }
}

export default userReducer
