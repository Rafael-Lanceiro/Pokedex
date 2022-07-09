const getPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/10';

const fetchPokemon = () => {
    fetch(getPokemonUrl) 
        .then((response) => response.json())
        .then((pokemon) => console.log(pokemon));
};

fetchPokemon();

