import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FormDialog from './modal';

import './table.scss';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isHidden: true,
      open: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDisplayResults = this.handleDisplayResults.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleDisplayResults(e) {
    e.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden,
    });
  }
  handleClickOpen() {
    this.setState({ open: true });
    console.log('grftjf');
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <input
          className="searchbox"
          type="text"
          placeholder="town or post code"
          onChange={this.handleInputChange}
          value={this.state.searchText}
        />
        <div className="form-group row">

          <div className="col-sm-10">
            <select
              className="form-control"
              id="propertyType"
            >
              <option value="none">Select an option</option>
              <option value="Small House">Small House</option>
              <option value="Medium House">Medium House</option>
              <option value="Office">Office</option>
              <option value="Warehouse">Warehouse</option>
            </select>
          </div>
        </div>
        <button type="button" className="search" onClick={this.handleDisplayResults}>Search
        </button>
        {!this.state.isHidden && <TableResults open={this.state.open} onButtonClick={this.handleOpen} onClickOpen={this.handleClickOpen} onClickClose={this.handleClose} />}

      </div>
    );
  }
}

const TableResults = props => (
  <Table className="table" border="1">
    <TableHead>
      <TableRow>
        <TableCell>Property Type</TableCell>
        <TableCell className="percentage">Coverage</TableCell>
        <TableCell className="price">Savings</TableCell>
        <TableCell className="contact">Contact</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      <TableRow className="columns">
        <TableCell>Small House</TableCell>
        <TableCell>25%</TableCell>
        <TableCell>£3000</TableCell>
        <TableCell>
          {/* <button type="submit" className="button" onClick={props.onClickOpen}>Enquire</button> */}
          <FormDialog open={props.open} onButtonClick={props.handleClickOpen} onClickOpen={props.onClickOpen} onClickClose={props.onClickClose} /></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Big House</TableCell>
        <TableCell>50%</TableCell>
        <TableCell>£4500</TableCell>
        <TableCell><FormDialog open={props.open} onButtonClick={props.handleClickOpen} onClickOpen={props.onClickOpen} onClickClose={props.onClickClose} /></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Warehouse</TableCell>
        <TableCell>100%</TableCell>
        <TableCell>£5600</TableCell>
        <TableCell><FormDialog open={props.open} onButtonClick={props.handleClickOpen} onClickOpen={props.onClickOpen} onClickClose={props.onClickClose} /></TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

SearchForm.propTypes = {
  handleInputSubmit: PropTypes.func.isRequired,

};


export { SearchForm, TableResults };
