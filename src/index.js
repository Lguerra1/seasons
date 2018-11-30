import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

export default class App extends Component {
    state = {
        latitude: null,
        errorMessage: ''
        
    }

    componentDidMount() {
        console.log("Component did mount")
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ latitude: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        )      
    }

    render() {
        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.latitude) {
            return <SeasonDisplay lat={this.state.latitude}/>;
        }

        return <div><i class="notched circle loading icon"></i>Loading...</div>;

    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);