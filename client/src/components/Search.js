import React from 'react';
import getPokemon from '../../../lib/getPokemon';
import PokemonList from './PokemonList';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '...'
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
    let query = this.state.text.toLowerCase();
    getPokemon(query, this.props.updatePokemon);
  }

  render() {
    return (
      <div>
      <form action="#">
        <h3>Search by Name or Number</h3>
        <input type="text" value={this.state.text} onChange={(e)=> this.handleInput(e)}/>
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        <button onClick={() => this.props.clearList()}>Clear List</button>
      </form>
    </div>
    );
  }
}

export default Search;