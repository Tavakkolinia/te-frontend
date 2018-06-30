import React, { Fragment } from 'react';
import axios from 'axios';
import injectTapEventPlugin from 'react-tap-event-plugin';
import SearchForm from './searchForm';
import TableResults from './table';
import FormDialog from './modal';


injectTapEventPlugin();


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    };

   // this.handleSubmit = this.handleSubmit.bind(this);
  

  /*handleSubmit() {
    axios.get(`#`)
      .then((response) => {
        this.setState({
        });
      }).catch((err) => {
        console.log(err);
      });*/
  }

  render() {
    return (
      <Fragment>
        <SearchForm />
                  
        <TableResults />
        <FormDialog />
      </Fragment>
    );
  }
}

export default App;

