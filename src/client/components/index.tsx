import * as React from 'react'
import {RouteComponentProps} from 'react-router'
import {Router, Switch, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import Async from './async'

const landingPage = () => import(/* webpackChunkName:'landing-page' */ './landing')
const termsOfUsePage = () => import(/* webpackChunkName:'terms-of-use-page' */ './terms-of-use')

export const history = createBrowserHistory()
const RouterApp:React.FunctionComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact strict path={'/'} render={(routeComponentProps:RouteComponentProps<any>) =>
          <Async module={landingPage} props={routeComponentProps}/>
        }/>
        <Route exact strict path={'/terms-of-use'} render={(routeComponentProps:RouteComponentProps<any>) =>
          <Async module={termsOfUsePage} props={routeComponentProps}/>
        }/>
      </Switch>
    </Router>
  )
}

export default RouterApp