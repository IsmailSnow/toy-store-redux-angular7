/**
 * Initialize defaultRootState
 */
import defaultPhoneState from './phone/phone'
import defaultUserState from './user/user'
import defaultMessageState from './message/message'

const defaultRootState = {
  phoneReducer: defaultPhoneState,
  userReducer: defaultUserState,
  messageReducer: defaultMessageState
}

export default defaultRootState
