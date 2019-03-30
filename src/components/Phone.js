/**
 * Objet Phone
 * { name, price }
 *
 * styles/phone.css
 *
 * <article class="Phone">
 *    <div> ? </div>
 *    <div> ? &euro;</div>
 * </article>
 */

import React from 'react'
import PropTypes from 'prop-types'
import '../styles/phone.css'

const Phone = ({ id, name, price, selected, handleSelect }) => {
  const phoneClass = `Phone ${selected ? 'selected' : ''}`

  return <article className={phoneClass} onClick={() => handleSelect(id, selected)}>
    <div>{name}</div>
    <div>{price}&euro;</div>
  </article>
}

Phone.propTypes = {
  id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  selected: PropTypes.bool,
  handleSelect: PropTypes.func.isRequired
}

export default Phone
