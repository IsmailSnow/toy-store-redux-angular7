import PhoneApi from '../../services/phoneApi'

export const PHONE_ACTIONS = {
  ADD_PHONES: 'PHONE_ACTIONS/ADD_PHONES',
  SELECT_PHONE: 'PHONE_ACTIONS/SELECT_PHONE'
}

export const getAllPhonesAction = () => (
  (dispatch) => {
    PhoneApi.getAllPhones().then((phones) => {
      dispatch({
        type: PHONE_ACTIONS.ADD_PHONES,
        phones
      })
    })
  }
)

export const selectPhoneAction = id => (
  {
    type: PHONE_ACTIONS.SELECT_PHONE,
    id
  }
)
