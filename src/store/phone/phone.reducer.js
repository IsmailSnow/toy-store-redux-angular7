import { PHONE_ACTIONS } from './phone.actions'
import defaultPhoneState from './phone'

function phoneReducer(state = defaultPhoneState, action) {
  let position
  let selectedPhones

  switch (action.type) {
  case PHONE_ACTIONS.ADD_PHONES:
    return { ...state, phones: action.phones }

  case PHONE_ACTIONS.SELECT_PHONE:
    position = state.selectedPhones.indexOf(action.id)
    selectedPhones = Array.from(state.selectedPhones)

    if (position === -1) {
      selectedPhones.push(action.id)
    } else {
      selectedPhones.splice(position, 1)
    }

    return { ...state, selectedPhones }

  default:
    return state
  }
}

export default phoneReducer
