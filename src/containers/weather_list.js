import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const { lat, lon } = cityData.city.coord;
        const temps = cityData.list.map(weather => weather.main.temp - 273.15);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key={name}>
                <td >
                    <GoogleMap lat={lat} lon={lon} />
                </td>
                <td>
                    <Chart data={temps} color="orange" units="C°" />
                </td>
                <td>
                    <Chart data={pressures} color="blue" units="hPa" />
                </td>
                <td>
                    <Chart data={humidities} color="green" units="%"/>
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="text-center">City</th>
                        <th className="text-center">Temperature (C°)</th>
                        <th className="text-center">Pressure (hPa)</th>
                        <th className="text-center">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({weather}) => {
    return { weather };
};

const weatherListContainer = connect(
    mapStateToProps
)(WeatherList);

export default weatherListContainer;