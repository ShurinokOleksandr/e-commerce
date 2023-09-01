/* eslint react/no-multi-comp: 0, no-console: 0 */
import Slider from 'rc-slider';
import React from 'react';

const style = { width: 400, margin: 50 };

function log(value) {
    console.log(value); //eslint-disable-line
}

class RangeSlider extends React.Component<any, any> {
    handleApply = () => {
        const { lowerBound, upperBound } = this.state;
        this.setState({ value: [lowerBound, upperBound] });
    };

    onSliderChange = (value) => {
        log(value);
        this.setState({
            value,
        });
    };

    onUpperBoundChange = (e) => {
        this.setState({ upperBound: +e.target.value });
    };

    onLowerBoundChange = (e) => {
        this.setState({ lowerBound: +e.target.value });
    };

    constructor(props) {
        super(props);
        this.state = {
            value: [20, 40],
            upperBound: 40,
            lowerBound: 20,
        };
    }

    render() {
        return (
            <div>
                <label>LowerBound: </label>
                <input onChange={this.onLowerBoundChange} value={this.state.lowerBound} type="number" />
                <br />
                <label>UpperBound: </label>
                <input onChange={this.onUpperBoundChange} value={this.state.upperBound} type="number" />
                <br />
                <button onClick={this.handleApply} type="button">
                    Apply
                </button>
                <br />
                <br />
                <Slider onChange={this.onSliderChange} value={this.state.value} allowCross={false} range />
            </div>
        );
    }
}
