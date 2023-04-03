import React from 'react';

const PokemonCard = ({ name, imgSrc }) => {
    return (
        <figure className="PokemonCard">
            {imgSrc ? <img className='PokemonCardImg' src={imgSrc} alt={name} /> : <p>???</p>}
            <figcaption className='BulbasaurCase'>{name}</figcaption>
        </figure>
    );
};

export default PokemonCard;
