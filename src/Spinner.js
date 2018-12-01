import React from 'react'

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui huge text loader">{props.message}</div>
        </div>
    )
}

// you can set default properites to a component, good in case if you forget to add properties to the component.

Spinner.defaultProps = {
    message: "Loading..."
}
export default Spinner;