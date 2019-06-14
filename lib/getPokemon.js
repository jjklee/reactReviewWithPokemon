import axios from 'axios';

const getPokemon = (query, callback) => {
  //TODO
  axios.get('https://pokeapi.co/api/v2/pokemon/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    // this.setState({
    //   pokemon
    // })
  });
}

export default getPokemon;