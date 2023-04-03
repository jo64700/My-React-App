import React from 'react';


const buttonPokemon = [
    { name: "Bulbasaur" },
    { name: "Charmander" },
    { name: "Squirtle" },
    { name: "Pikachu" },
    { name: "Mew" },
];

function NavBar({ count, setCount, pokemonList }) {

    const handleClickNext = () => {
        setCount(count + 1)
    }
    const handleClickPrevious = () => {
        setCount(count - 1)
    }

    return (
        <div className='btnContainer'>
            {count > 0 ? <button className="btnIndexSelector" onClick={handleClickPrevious}>précédant</button> : <button className="btnIndexSelector">dernier</button>}
            {count < pokemonList.length - 1 ? <button className="btnIndexSelector" onClick={handleClickNext}>suivant</button> : <button className="btnIndexSelector">Fin</button>}


        </div>
    )
}

export default NavBar;