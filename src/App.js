import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Routes from './routes';
// defaultTheme
import themes from './themes';


function App(){
  
  return (

    <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes()}>
                <CssBaseline />
                    <Routes />
            </ThemeProvider>
    </StyledEngineProvider>
    
  )
}

export default App;











{/* <div>
    <header></header>
    <Switch>
      <Route path="/" exact>
          <Redirect to = '/login'/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/mocktest">
        <MockTest/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="*">
        <NotFound/>
      </Route>
    </Switch>
    <footer></footer>
    </div> */}