/**
 * React Component - weather_list.js created on 14/04/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {

  constructor(props) {
    super(props);
  }

  renderWeatherRow(cityData) {
    const city = cityData.city;
    const temperatures = _.map(cityData.list.map(weather => weather.main.temp), temp => temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={city.id}>
        <td style={{verticalAlign:'middle', fontWeight: 'bold'}}>{city.name}</td>
        <td><Chart data={temperatures} color="red" units="C"></Chart></td>
        <td><Chart data={pressures} color="blue" units="hPa"></Chart></td>
        <td><Chart data={humidities} color="wheat" units="%"></Chart></td>
      </tr>
    );
  }

  render() {

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeatherRow)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {
    weather//sameAs weather: state.weather
  };
}

//Pramote BookList from a component to a container - as it needs to know
// dispatch and state methods available as props
export default connect(mapStateToProps)(WeatherList);
