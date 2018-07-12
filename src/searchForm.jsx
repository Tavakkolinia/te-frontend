import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import FormDialog from './FormDialog';

import './table.scss';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: '',
      isHidden: true,
      open: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDisplayResults = this.handleDisplayResults.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmitEnquiry = this.handleSubmitEnquiry.bind(this);
  }


  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value, // Rob
      // postcode: event.target.value,
    });
  }

  handleDisplayResults(e) {
    e.preventDefault();

    let endpoint = 'http://localhost:3000/calculate/';
    endpoint += `${this.state.propertyType}/`;
    endpoint += this.state.postcode;

    axios.get(endpoint)
      .then((response) => {
        this.setState({
          savings: response.data.savings,
          isHidden: !this.state.isHidden,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleSubmitEnquiry(fields) {
    console.log(fields);
    console.log(this.state);
    this.setState({ open: true });

    const endpoint = 'http://localhost:3000/queries/';

    axios.post(endpoint, Object.assign({}, this.state, fields))
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="verticalalign">

        <div className="inner">
          <input
            className="searchbox"
            type="text"
            name="postcode" // Rob
            placeholder="town or post code"
            onChange={this.handleInputChange}
            value={this.state.postcode}
          />
          <div className="form-group row">

            <div className="col-sm-10">
              <select
                className="form-control"
                id="propertyType"
                name="propertyType"
                onChange={this.handleInputChange} // Rob
              >
                <option value="none">Select an option</option>
                <option value="smallhouse">Small House</option>
                <option value="normalhouse">Medium House</option>
                <option value="office">Office</option>
                <option value="warehouse">Warehouse</option>
              </select>
            </div>
            <button type="button" className="search" onClick={this.handleDisplayResults}>Search
            </button>
            {!this.state.isHidden && <TableResults
              savings={this.state.savings}
              open={this.state.open}
              onButtonClick={this.handleOpen}
              onClickOpen={this.handleClickOpen}
              onClickClose={this.handleClose}
              postcode={this.state.postcode}
              propertyType={this.state.propertyType}
            />}
          </div>
          <button type="button" className="search" onClick={this.handleDisplayResults}>Search
          </button>
          {!this.state.isHidden && <TableResults
            savings={this.state.savings}
            open={this.state.open}
            onButtonClick={this.handleOpen}
            onClickOpen={this.handleClickOpen}
            onClickClose={this.handleClose}
            postcode={this.state.postcode}
            propertyType={this.state.propertyType}
            onSubmitEnquiry={this.handleSubmitEnquiry}
          />}
        </div>
      </div>
    );
  }
}

const TableResults = props => (
  <Table className="table" border="1">
    <TableHead>
      <TableRow>
        <TableCell>Property Type {console.log(props)}</TableCell>
        <TableCell className="percentage">Coverage</TableCell>
        <TableCell className="price">Savings</TableCell>
        <TableCell className="contact">Contact</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      <TableRow className="columns">
        <TableCell>Option 1</TableCell>
        <TableCell>25%</TableCell>
        <TableCell>£{Math.round(props.savings.quarterCoverage * 100) / 100}</TableCell>
        <TableCell>

          <FormDialog onSubmitEnquiry={props.onSubmitEnquiry} postcode={props.postcode} propertyType={props.propertyType} open={props.open} onButtonClick={props.handleClickOpen} onClickOpen={props.onClickOpen} onClickClose={props.onClickClose} />
        </TableCell>
      </TableRow>
      <TableRow className="columns">
        <TableCell>Option 2</TableCell>
        <TableCell>50%</TableCell>
        <TableCell>£{Math.round(props.savings.halfCoverage * 100) / 100}</TableCell>
        <TableCell><FormDialog onSubmitEnquiry={props.onSubmitEnquiry} postcode={props.postcode} propertyType={props.propertyType} open={props.open} onButtonClick={props.handleClickOpen} onClickOpen={props.onClickOpen} onClickClose={props.onClickClose} /></TableCell>
      </TableRow>
      <TableRow className="columns">
        <TableCell>Option 3</TableCell>
        <TableCell>100%</TableCell>
        <TableCell>£{Math.round(props.savings.fullCoverage * 100) / 100}</TableCell>
        <TableCell><FormDialog onSubmitEnquiry={props.onSubmitEnquiry} postcode={props.postcode} propertyType={props.propertyType} open={props.open} onButtonClick={props.handleClickOpen} onClickOpen={props.onClickOpen} onClickClose={props.onClickClose} /></TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export { SearchForm, TableResults };
