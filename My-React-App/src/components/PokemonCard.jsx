import React from 'react';
import PropTypes from 'prop-types';

function PokemonCard(props) {
    return (
        <figure className="card">
            {props.imgSrc ? <img src={props.imgSrc} alt={props.name} /> : <p>???</p>}
            <figcaption>{props.name}</figcaption>
        </figure>
    );
};

PokemonCard.propsTypes = {
    pokemonList: PropsTypes.arrayOf(PropsTypes.string).shape({
        name: PropsTypes.String.isRequired,
        imgSrc: PropsTypes.string,
    }.isRequired).isRequired,
}

export default PokemonCard;
