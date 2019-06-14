//TODO
import React from 'react';
import PokemonListItem from './PokemonListItem';

const PokemonList = (props) =>
  <div id="pokemonList">
    {props.pokemons.map((pokemon, key) => 
        <PokemonListItem
        pokemon={pokemon}
        key={key} />)}
  </div>




export default PokemonList