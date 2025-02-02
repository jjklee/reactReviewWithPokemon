//TODO
import React from 'react';
import Search from './Search'
import PokemonList from './PokemonList';
import getPokemon from '../../../lib/getPokemon';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
    this.clearList = this.clearList.bind(this);
    this.updatePokemon = this.updatePokemon.bind(this);
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.sortAllPoke = this.sortAllPoke.bind(this);
  }

  componentDidMount() {
    this.getAllPokemon();
  }

  getAllPokemon () {
    var allpoke = [];
    for (let i = 1; i <= 151; i++) {
      getPokemon(i, (data) => {
        // allpoke.push(data);
        let result = {};
        let idLen = data.id.toString().length
        if (idLen === 2) {
          result.id = `0${data.id}`
        } else if (idLen === 1) {
          result.id = `00${data.id}`
        } else {
          result.id = data.id
        }
        result.name = data.name;
        result.sprites = data.sprites;
        allpoke.push(result);
        if (allpoke.length === 151) {
          this.sortAllPoke(allpoke)
        }
      });
    }
  }

  sortAllPoke(allpoke) {
    var arr = allpoke.sort((a, b) => (a.id - b.id))
    this.setState({ pokemon: arr });
  }

  clearList() {
    this.setState({
      pokemon: []
    });
  }

  updatePokemon(data) {
    this.setState({
      pokemon: [data, ...this.state.pokemon]
    });
  }

  render() {
    return (
      <div>
        <Search handleSubmit={this.handleSubmit} updatePokemon={this.updatePokemon} clearList={this.clearList}/>
        <PokemonList pokemons={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;

//logging the state after func runs
// componentDidMount() {
//   console.log(this.props.pokemon)
//   this.setState({ pokemon: this.props.pokemon }, () => console.log(this.state.pokemon));
// }