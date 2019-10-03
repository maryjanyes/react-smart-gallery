import React, { Component } from 'react';

export default class ControlsComponent extends Component {

    render() {

        const {
            next,
            prev,
            active_slide,
            total_len
        } = this.props;
        return (
            <div className="controls--area">
                <div className="controls-wrapper">
                    <button onClick={prev}>{'<'}</button>
                    <button onClick={next}>{'>'}</button>
                </div>
                <p className="slides-len-text">Active index {active_slide + 1} from {total_len}</p>
            </div>
        );
    }
}