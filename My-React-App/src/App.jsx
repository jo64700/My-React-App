import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      <PokemonCard name={pokemonList[count].name} imgSrc={pokemonList[count].imgSrc} />
      <NavBar count={count} setCount={setCount} pokemonList={pokemonList} />
    </div>
  )
}


export default App;
