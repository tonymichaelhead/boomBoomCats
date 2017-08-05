import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import RouteIndex from './components/RouteIndex.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
    <RouteIndex />, 
  document.getElementById('app')
)