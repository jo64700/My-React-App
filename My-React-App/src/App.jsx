import { useEffect, useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';



const pokemonList = [
  {
    index: "1",
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    index: "2",
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    index: "3",
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    index: "4",
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    index: "5",
    name: "mew",
  },
];


function App() {

  useEffect(
    () => {
      alert("Hello pokemon trainer :)");


    }, []
  );
  const handlePokemonClick = (index) => {
    setCount(index);
  }
  const [count, setCount] = useState(0);
  pokemonList[count].name === "pikachu" ? alert("pika pika pikachu !!!") : ""

  return (
    <div className='masterDiv'>
      <PokemonCard name={pokemonList[count].name} imgSrc={pokemonList[count].imgSrc} />

      <div className='btnContainer'>
        {pokemonList.map((pokemon, index) => (
          <button className='btnIndexSelector' key={pokemon.index} onClick={() => handlePokemonClick(index)}>{pokemon.name}</button>
        ))}




      </div >
    </div>
  )
}


export default App;
