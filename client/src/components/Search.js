import React from 'react';
import getPokemon from '../../../lib/getPokemon';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'pikachu'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
      <div id="search">
      <form action="#">
        <span>Search by Name or Number </span>
        <input type="text"
          onClick={() => this.setState({ text: '' })} 
          value={this.state.text} 
          onChange={(e)=> this.handleInput(e)}/>
        <button onClick={(e) => this.handleSubmit(e)}>Submit</button> 
        <button onClick={() => this.props.clearList()}>Clear List</button>
      </form>
    </div>
    );
  }
}

export default Search;