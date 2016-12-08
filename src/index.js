import React from 'react';
import { render } from 'react-dom';
import RangeAdvanced from './components/rangeofdayspicker';
import LeafletMap from './components/leaflet-map';
import ExampleChart from './components/google-chart';
import BasicSlider from './components/slider';
import './styles.css';

render(<RangeAdvanced />,document.getElementById('daypicker'));
render(<LeafletMap />,document.getElementById('map-container'));
render(<ExampleChart />,document.getElementById('charts'));
render(<BasicSlider />,document.getElementById('slider'));