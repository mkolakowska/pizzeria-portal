import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import TablesBooking from './components/views/TablesBooking/TablesBooking';
import TablesEvent from './components/views/TablesEvent/TablesEvent';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrder from './components/views/WaiterOrder/WaiterOrder';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    // secondary: {main: '#11cb5f' },
  },
});

const App = () => (
  <div className="App">
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/`}
                component={Dashboard}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/login`}
                component={Login}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/tables`}
                component={Tables}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/waiter`}
                component={Waiter}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/kitchen`}
                component={Kitchen}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/tables/booking/new`}
                component={TablesBooking}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/tables/events/new`}
                component={TablesEvent}
              />
              <Route
                exact
                path={`${process.env.PUBLIC_URL}/waiter/order/new`}
                component={WaiterOrder}
              />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </div>
);

export default App;
