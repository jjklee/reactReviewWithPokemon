//TODO
import React from 'react';

const PokemonListItem = (prop) =>
  <div className="pokemonItem">
    <div id='pokeid'>#{prop.pokemon.id}</div>
    <div id='name'>{prop.pokemon.name}</div>
    <img src={prop.pokemon.sprites.front_default} alt="pokemon image" id='pokebg'/> 
    <div id='type'></div>
  </div>


export default PokemonListItem;

//destructuring
// const PokemonListItem = ({pokemon}) =>
//   <div className="pokemonItem">
//     <div>Name: {pokemon.name}</div>
//     <div>Id: {pokemon.id}</div>
//     <img src={pokemon.sprites.front_default} alt="pokemon image"/> 
//   </div>
