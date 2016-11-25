import React from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

let config = {};
config.params = {
	center: [25.0408578889, 121.567904444],
	zoomControl: false,
	zoom: 13,
	maxZoom: 19,
	minZoom: 11,
	scrollwheel: false,
	legends: true,
	infoControl: false,
	attributionControl: true
};

config.tileLayer = {
	uri: 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
	params: {
		minZoom: 11,
    	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    	id: 'geojedi.ooj08o8c',
    	accessToken: 'pk.eyJ1IjoiZ2VvamVkaSIsImEiOiJjaWpvMDNwYnMwMHRidmFseDRhOGNrZjIwIn0.hkVHv9_Z-PpXfOLrKMlfCQ'
    }
};


export default class LeafletMap extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			map: null,
			tileLayer: null,
		};

		this._mapNode = null;
	}
 
	componentDidMount() {
		//componentDidMount() is invoked immediately after a component is mounted. 
		//Initialization that requires DOM nodes should go here. 
		//If you need to load data from a remote endpoint, this is a good place to instantiate the network request. 
		//Setting state in this method will trigger a re-rendering.
		if (!this.state.map) this.init(this._mapNode);
	}

	init(id) {
		if(this.state.map) return;

		let map = L.map(id, config.params);

		L.control.zoom({ position: "bottomleft"}).addTo(map);
		L.control.scale({ position: "bottomleft"}).addTo(map);

		const tileLayer = L.tileLayer(config.tileLayer.uri, config.tileLayer.params).addTo(map);

		this.setState({map, tileLayer});
	}

	render() {
		return (
			<div>
				<div ref={(node) => this._mapNode = node} id="map" />
			</div>
		);
	}
}