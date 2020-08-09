import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from './../ui/Spinner';
import styled from 'styled-components';

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1200px;
    margin: 0 auto;
    grid-gap: 0 0;
`;

const CharacterGrid = ({ isLoading, items }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <Cards className="cards">
            {items.map((item, i) => (
                <CharacterItem key={item.char_id} item={item} isOdd={Boolean(i%2)} />
            ))}
        </Cards>
    );
};

export default CharacterGrid;
