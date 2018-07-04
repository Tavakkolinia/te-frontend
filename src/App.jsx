import React, { Fragment } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { SearchForm } from './searchForm';


injectTapEventPlugin();


class App extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {


    };
  }*/

  render() {
    return (

      <SearchForm />


    );
  }
}

export default App;

