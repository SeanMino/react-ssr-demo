import React from 'react'
import { hydrate } from 'react-dom'
import { Router, match, browserHistory } from 'react-router'
import routes from './pages/routes'
import "./styles/index.less";

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
  hydrate(
    <Router {...renderProps}/>,
    document.getElementById('root')
  )
});
