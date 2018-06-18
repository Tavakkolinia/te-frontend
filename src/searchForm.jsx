import React from 'react';
import PropTypes from 'prop-types';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
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
        <button onClick={(event) => {
          event.preventDefault(); this.props.handleSubmit(this.state.searchText);
          }
          }
        >Search
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};


export default SearchForm;
