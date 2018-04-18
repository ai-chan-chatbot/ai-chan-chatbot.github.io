import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classnames from 'classnames'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {lightGreen, green, grey} from 'material-ui/colors'

import LandingPage from './components/landing'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: lightGreen[300],
      main: lightGreen[500],
      dark: lightGreen[700],
      contrastText: 'white'
    },
    secondary: {
      light: green[700],
      main: green[800],
      dark: green[900],
      contrastText: 'white'
    },
    background: {
      paper: grey[900]
    }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <LandingPage/>
  </MuiThemeProvider>
, document.getElementById('root'))