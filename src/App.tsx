// import dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@material-ui/core';


//global stylesheet
import './css/style.css';

// page imports
import Homepage from './pages/Homepage';

// component imports
import Sidebar from './components/Sidebar';



// theme declaration
const theme = createTheme({
  palette: {
    // for buttons
    primary: {
      main: "#60C697"
    },
    secondary: {
      main: "#FFFFFF"
    }
  }, 

});


function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Box display="flex">
            <Sidebar />
            <Switch>
              <Route exact path="/" component={Homepage}/>
            </Switch>
          </Box>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
