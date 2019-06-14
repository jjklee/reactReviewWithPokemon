//TODO
import React from 'react';

const PokemonListItem = (prop) =>
  <div className="pokemonItem">
    <div>Name: {prop.pokemon.name}</div>
    <div>Id: {prop.pokemon.id}</div>
    <img src={prop.pokemon.sprites.front_default} alt="pokemon image"/> 
  </div>


export default PokemonListItem;

//destructuring
// const PokemonListItem = ({pokemon}) =>
//   <div className="pokemonItem">
//     <div>Name: {pokemon.name}</div>
//     <div>Id: {pokemon.id}</div>
//     <img src={pokemon.sprites.front_default} alt="pokemon image"/> 
//   </div>
