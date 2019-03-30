/**
 * Objet Phones
 *
 * styles/phone.css
 *
 * <div class="PhoneList">
 *    <a href="#" class="PhoneLink">
 *      <Phone />
 *    </a>
 * </div>
 *
 * - Récupère la liste des phones au montage du componsant en state
 * - Affiche la liste de phones
 * - Chaque Phone doit comporter un lien vers /managePhone/:id
 */

import React from 'react'
import { connect } from 'react-redux'

import { addNameAction } from '../store/user/user.actions'
import { getAllPhonesAction, selectPhoneAction } from '../store/phone/phone.actions'
import { messageAction } from '../store/message/message.actions'

import Phone from '../components/Phone'
import UserLogin from '../components/UserLogin'
import '../styles/phone.css'

class Phones extends React.Component {
  componentDidMount() {
    this.props.getAllPhonesAction()
  }

  handleSelect(id, selected) {
    const { selectedPhones, selectPhoneAction, messageAction } = this.props

    if (selectedPhones.length >= 3 && !selected) {
      return messageAction('Veuillez sélectionner 3 élements maximum.')
    }

    selectPhoneAction(id)
  }

  render() {
    const { phones, selectedPhones, userReducer, addNameAction } = this.props

    const phoneList = phones.map(phone => {
      return <Phone
        key={phone.id}
        className="PhoneLink"
        {...phone}
        selected={!!selectedPhones.includes(phone.id)}
        handleSelect={(id, selected) => this.handleSelect(id, selected)}
      />

    })

    return userReducer.name ?
      (
        <div className="PhoneList">{phoneList}</div>
      )
      :
      (
        <UserLogin submit={name => addNameAction(name)} />
      )
  }
}

const mapStateToProps = ({ userReducer, phoneReducer }) => (
  {
    userReducer,
    phones: phoneReducer.phones,
    selectedPhones: phoneReducer.selectedPhones
  }
)
const mapDispatchToProps = { addNameAction, getAllPhonesAction, selectPhoneAction, messageAction }

export default connect(mapStateToProps, mapDispatchToProps)(Phones)
