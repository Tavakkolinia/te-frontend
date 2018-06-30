import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import './table.scss';

// import TableResults from './table';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isHidden: true,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDisplayResults = this.handleDisplayResults.bind(this);
  }


  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleDisplayResults(e) {
    this.setState({
      isHidden: !this.state.isHidden,
    });
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <input
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
        <button onClick={this.handleDisplayResults}>Search
          {!this.state.isHidden && <TableResults />}
        </button>
      </form>
    );
  }
}
const TableResults = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Property Type</TableCell>
        <TableCell className="percentage">Coverage</TableCell>
        <TableCell className="price">Savings</TableCell>
        <TableCell>Contact</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      <TableRow className="columns">
        <TableCell>Small House</TableCell>
        <TableCell>25%</TableCell>
        <TableCell>£3000</TableCell>
        <TableCell>
          <button type="button" className="button">Enquire</button>


        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Big House</TableCell>
        <TableCell>50%</TableCell>
        <TableCell>£4500</TableCell>
        <TableCell><button type="submit" className="button">Enquire</button></TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Warehouse</TableCell>
        <TableCell>100%</TableCell>
        <TableCell>£5600</TableCell>
        <TableCell><button type="submit" className="button">Enquire</button></TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

SearchForm.propTypes = {
  handleInputSubmit: PropTypes.func.isRequired,
};


export { SearchForm, TableResults };
