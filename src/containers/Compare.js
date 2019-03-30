import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import CompareItem from '../components/CompareItem'
import '../styles/compare.css'

const Compare = (props) => {
  const { phones, isConnected } = props

  const phoneTemplate = phones.map(phone => <CompareItem key={phone.id} {...phone} />)

  return isConnected && !!phones.length ? <section className="CompareWrapper">
    {phoneTemplate}
  </section> : <Redirect to="/" />
}

const mapStateToProps = ({ phoneReducer, userReducer }) => (
  {
    phones: phoneReducer.phones.filter(phone => phoneReducer.selectedPhones.includes(phone.id)),
    isConnected: !!userReducer.name
  }
)

Compare.propTypes = {
  phones: PropTypes.array.isRequired,
  isConnected: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(Compare)
