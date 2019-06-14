//TODO
import React from 'react';
import Search from './Search'
import PokemonList from './PokemonList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
    this.clearList = this.clearList.bind(this);
    this.updatePokemon = this.updatePokemon.bind(this);

  }

  componentDidMount() {
    this.setState({ pokemon: this.state.pokemon });
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