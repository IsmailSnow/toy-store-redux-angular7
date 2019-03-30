import React from 'react'
import PropTypes from 'prop-types'
import '../styles/compare.css'

const CompareItem = props => {
  const { id, name, price } = props

  return <section className="CompareItem">
    <article className="CompareLine">
      <strong>{id}</strong>
      <span>{name}</span>
    </article>
    <article className="CompareLine">{price}&euro;</article>
  </section>
}

CompareItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}
export default CompareItem
