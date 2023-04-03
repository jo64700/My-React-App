import React from 'react';


function NavBar({ index, pokemonList }) {
    const handlePokemonClick = (index) => {
        setCount(index);
    }

    return (
        <div className='btnContainer'>

            {pokemonList.map((pokemon, index) => (
                <button key={pokemon.index} onClick={() => handlePokemonClick(index)}>{pokemon.name}</button>
            ))}



        </div >
    )
}

export default NavBar;