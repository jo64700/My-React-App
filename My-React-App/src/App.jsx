import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard';
import PropTypes from 'prop-types';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  )
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default App
