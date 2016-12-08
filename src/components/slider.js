import React from 'react';
import Slider from 'react-rangeslider';

export default class BasicSlider extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			value: 10
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(value) {
		this.setState({
			value: value
		});
	}

	render() {
		const value = this.state.value;
		return (
			<div className='horizontal-slider'>
			<h4>Basic Slider</h4>
			<Slider min={0}
					max={100}
					value={value}
					onChange={this.handleChange} />
			<div className='value'>Value: {value}</div>
			<hr />
			</div>
		);
	}
}