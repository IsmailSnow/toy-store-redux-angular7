/**
 * Composant App
 * <Router>
 *    <main class="mainPage">
 *      . header
 *      . route cible
 *        - route vers Phones
 *        - route vers PhoneForm en création (sans id) : /managePhone
 *        - route vers PhoneForm en modification (avec id) : /managePhone/:id
 *        - autre route vers PageNotFound
 *    </main>
 * </Router>
 */
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/**
 *  Add redux store + Provider
 */
import { Provider } from 'react-redux'
import store from './store/store'

import Phones from './containers/Phones'
import PhoneForm from './containers/PhoneForm'
import Header from './containers/Header'
import PageNotFound from './components/PageNotFound'
import Compare from './containers/Compare'
import Message from './containers/Message'

import './styles/main.css'

const App = () => (
  <Provider store={store}>
    <Router>
      <main className="mainPage">
        <Header />
        <Switch>
          <Route path="/" component={Phones} exact />
          <Route path="/managePhone" component={PhoneForm} exact />
          <Route path="/managePhone/:id" component={PhoneForm} />
          <Route path="/compare" component={Compare} />
          <Route component={PageNotFound} />
        </Switch>
        <Message />
      </main>
    </Router>
  </Provider>
)

export default App
