import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import pokemon from '../../data/fakePokemonData';


//TODO
ReactDOM.render(<App pokemon={pokemon} />, document.getElementById('app'))