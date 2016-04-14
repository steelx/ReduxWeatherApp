/**
 * React Component - search_bar.js created on 14/04/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {FetchWeather} from '../redux/actions/fetch-weather';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }

  onInputChange(term) {
    this.setState({term});
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});//clear input field
  }

  render() {
    return (
      <form className="form-inline" onSubmit={event => this.onFormSubmit(event)}>
        <div className="input-group">
          <input className="form-control" type="search" value={this.state.term}
                 onChange={ event => this.onInputChange(event.target.value) }/>
          <span className="input-group-addon">
            <button type="submit" className="btn btn-secondary">GO</button>
          </span>
        </div>

      </form>
    );
  }
}

function mapStateToProps(state) {
  //Whatever gets returned from here
  //will show up as props inside BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  //Whenever selectBook is called the result will be passed
  //to all reducers
  return bindActionCreators({fetchWeather: FetchWeather}, dispatch);
}

//Pramote BookList from a component to a container - as it needs to know
// dispatch and state methods available as props
export default connect(null, mapDispatchToProps)(SearchBar);
