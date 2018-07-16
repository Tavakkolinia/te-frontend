import React, { Fragment } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { SearchForm } from './searchForm';
import thankyou from './thankyou';


injectTapEventPlugin();


class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/thankyou" component={thankyou} />
            <SearchForm />
          </Switch>
        </React.Fragment>
      </BrowserRouter>


    );
  }
}

export default App;

