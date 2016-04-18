/* @flow */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import SearchBar from '../../containers/search_bar';
import WeatherList from '../../containers/weather_list';
import DuckImage from './Duck.jpg';
import classes from './HomeView.scss';


// We avoid using the `@connect` decorator on the class definition so
// that we can export the undecorated component for testing.
// See: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class HomeView extends React.Component {

  render() {
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-2'>
            <img className={classes.duck}
                 src={DuckImage}
                 alt='This is a duck, because Redux.' />
            <SearchBar />
          </div>
        </div>

        <div className='row'>
          <div className='col-md-6 col-md-offset-2'>
            <h1>Welcome to the Redux Weather App</h1>
            <WeatherList />
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter
});
export default connect(mapStateToProps)(HomeView)
