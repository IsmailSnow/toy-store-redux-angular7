/**
 * Objet Header
 *
 * styles/header.css
 *
 * <header class="Header">
 *    <a href="/" class="HeaderLink">Phones</a>
 *    <a href="/managePhone" class="HeaderLink">Ajout Phone</a>
 * </header>
 *
 * Classe active : HeaderActive
 *
 * Faire un tableau de routes et les mapper
 */

import React from 'react'
import PropTypes from 'prop-types'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import '../styles/header.css'

const routes = [
  {
    url: '/',
    label: 'Phones'
  },
  {
    url: '/managePhone',
    label: 'Ajout Phone'
  },
  {
    url: '/compare',
    label: 'Comparer'
  }
]

const Links = routes.map(route => (
  <NavLink
    to={route.url}
    className="HeaderLink"
    activeClassName="HeaderActive"
    exact key={route.url}
  >{route.label}</NavLink>
))

const Header = (props) => (
  props.isConnected ? <header className="Header">
    <div className="HeaderTitleName">Bonjour {props.name}</div>
    <div>{Links}</div>
  </header> : <div className="Header HeaderTitle">Connection</div>
)

const mapStateToProps = ({ userReducer }) => (
  {
    isConnected: !!userReducer.name,
    name: userReducer.name
  }
)

Header.propTypes = {
  name: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired
}

export default withRouter(connect(mapStateToProps)(Header))
