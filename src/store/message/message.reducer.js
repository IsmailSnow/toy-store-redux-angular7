import { MESSAGE_ACTIONS } from './message.actions'
import defaultMessageState from './message'

function messageReducer(state = defaultMessageState, action) {
  switch (action.type) {
  case MESSAGE_ACTIONS.MESSAGE:
    return { ...state, isOpened: true, message: action.message }

  case MESSAGE_ACTIONS.CLOSE:
    return defaultMessageState

  default:
    return state
  }
}

export default messageReducer
