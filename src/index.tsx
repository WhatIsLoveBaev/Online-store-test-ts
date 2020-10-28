import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './Futura/stylesheet.css'

import reducer from './Reducers/index'


import Store from './Store/index';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const store = createStore(reducer)

function saveToLocal(state: any) {
  try {
      const local = JSON.stringify(state.Liked)
      localStorage.setItem('StoreLiked', local)
  } catch(e) {
      console.log(e)
  }
}

store.subscribe(() => saveToLocal(store.getState()))

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        top: '70px',
        paddingBottom: '70px',
        width: '320px'
      },
    },
    MuiAccordion: {
      
    },
    MuiAccordionSummary: {
      root: {
        padding: '12px 16px',
        "&.Mui-expanded": {
          minHeight: "0px"
        }
      },
    },
    MuiPaper: {
      elevation1: {
      }
    }
  }
});


ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Store />
    </ThemeProvider>
      
  </Provider>,document.getElementById('root'))

/* store.subscribe(() => console.log(store.getState()) ) */