import React, { lazy, Suspense, ReactElement } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Header } from '../components'

const ImageDetailsScreen = lazy(() => import('../views/ImageDetailsScreen'))
const ImagesListScreen = lazy(() => import('../views/ImagesListScreen'))

export const Navigation = (): ReactElement => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/">
        <Suspense fallback={<div />}>
          <ImagesListScreen />
        </Suspense>
      </Route>
      <Route exact path="/:imageId">
        <Suspense fallback={<div />}>
          <ImageDetailsScreen />
        </Suspense>
      </Route>
      <Redirect to="/" />
    </Switch>
  </Router>
)
