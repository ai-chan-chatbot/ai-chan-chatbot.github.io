import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {ThemeProvider} from '@material-ui/styles'
import {Theme, createMuiTheme} from '@material-ui/core/styles'
import {lightGreen, green, grey} from '@material-ui/core/colors'

import CombinedProvider from './store'
import Favicon from './components/favicon'
import LandingPage from './components/landing-page'

const theme:Theme = createMuiTheme({
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
  <CombinedProvider>
    <ThemeProvider theme={theme}>
      <Favicon/>
      <LandingPage/>
    </ThemeProvider>
  </CombinedProvider>
, document.getElementById('root'))