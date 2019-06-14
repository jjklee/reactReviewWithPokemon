import React from 'react';
import getPokemon from '../../../lib/getPokemon';
import PokemonList from './PokemonList';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hello'
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInput(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let query = this.state.text
    getPokemon(query, PokemonList);
  }

  render() {
    return (
      <div>
      <form action="#">
        <input type="text" value={this.state.text} onChange={(e)=> this.handleInput(e)}/>
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
      </form>
    </div>
    );
  }
}

export default Search;