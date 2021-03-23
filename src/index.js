import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'

import MathScopeProvider from './containers/MathScopeContext'
import { scopeEvaluator, parser } from './constants/parsing'

import theme from './constants/theme'
import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'


class Math3D extends Component {

  render() {
    return <Provider store={store}>
      <MathScopeProvider scopeEvaluator={scopeEvaluator} parser={parser}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </MathScopeProvider>
    </Provider>
  }
}

export default Math3D;

