import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            latitude: ""
        }
    }


    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        )
        return (
            <div>
                Latitude:
            </div>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);