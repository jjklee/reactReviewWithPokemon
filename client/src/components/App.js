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
  }

  componentDidMount() {
    this.setState({ pokemon: this.props.pokemon });
  }

  //logging the state after func runs
  // componentDidMount() {
  //   console.log(this.props.pokemon)
  //   this.setState({ pokemon: this.props.pokemon }, () => console.log(this.state.pokemon));
  // }

  render() {
    return (
      <div>
        <Search handleSubmit={this.handleSubmit}/>
        <PokemonList pokemons={this.props.pokemon}/>
      </div>
    )
  }
}

export default App;