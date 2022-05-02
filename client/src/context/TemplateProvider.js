// eslint-disable-next-line

import { createContext } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const TemplateContext = createContext(null);

export const TemplateProvider = ({children}) => {
  const theme = createTheme({
    overrides: {
      MuiDialog: {
        paperWidthSm: {
          maxWidth: 'unset',
          maxHeight: 'unset',
        },
       
      },
      MuiDialogContent: {
        root: {
         
          '&:first-child': {
            paddingTop: 0
          }
        }
      },
    //   MuiPaper:{
    //       root:{
    //           MuiAppBar:{
    //               root:{
    //                 backgroundColor: '#fff',
    //                 color: '#1A2027',
    //               }
    //           }
    //       }
    //   }
    
    }
  })

  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>
      <CssBaseline />
       {children}
       </ThemeProvider>
       </TemplateContext.Provider>
  )
}

// background-color: #fff;
// color: #1A2027;
// -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
// transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
// box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
// background-image: none;
// background-color: #fff;
// display: -webkit-box;
// display: -webkit-flex;
// display: -ms-flexbox;
// display: flex;
// -webkit-flex-direction: column;
// -ms-flex-direction: column;
// flex-direction: column;
// width: 100%;
// box-sizing: border-box;
// -webkit-flex-shrink: 0;
// -ms-flex-negative: 0;
// flex-shrink: 0;
// position: fixed;
// z-index: 1100;
// top: 0;
// left: auto;
// right: 0;
// background-color: #007FFF;
// color: #fff;
// padding: 8px 16px;
// -webkit-transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
// transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
// box-shadow: none;
// -webkit-backdrop-filter: blur(20px);
// backdrop-filter: blur(20px);
// border-style: solid;
// border-color: #E7EBF0;
// border-width: 0;
// border-bottom-width: thin;
// background: rgba(255,255,255,0.7);
// color: #2D3843;