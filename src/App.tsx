// import dependencies
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box, ThemeProvider, createTheme, Hidden } from '@material-ui/core';

//global stylesheet
import './css/style.css';

// page imports
import Homepage from './pages/Homepage';
import About from './pages/About';

// component imports
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';


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
  const [page, setPage] = useState('/');

  const handleSetPage = (event: React.SyntheticEvent) => {
    let target = event.currentTarget as HTMLInputElement;
    setPage(target.id);
  }

  return (
    <div className="App">
      <Navbar />
      <Router>
        <ThemeProvider theme={theme}>
          <Box display="flex">
            <Hidden mdDown>
              <Sidebar page={page} setPage={handleSetPage}/>
            </Hidden>
            <Box minHeight="90vh">
              <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/about" component={About}/>
              </Switch>
            </Box>
          </Box>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
