import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitute: null
        }
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            (err) => console.log(err)
        )
    }


    render() {
        return (
            <div>
                <div>Latitude: {this.state.latitude}</div>
                <div>Longitude: {this.state.longitude}</div>
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);