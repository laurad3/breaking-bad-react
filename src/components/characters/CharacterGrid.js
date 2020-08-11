import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from './../ui/Spinner';
import styled from 'styled-components';
import { breakpoint, map } from './../../breakpoints';

const CardWidth = 320;

const Cards = styled.div`
    display: grid;
    grid-template-columns: repeat(1, ${CardWidth}px);
    justify-content: center;

    ${breakpoint('md')`
        grid-template-columns: repeat(2, ${CardWidth}px);
    `};

    ${breakpoint('lg')`
        grid-template-columns: repeat(3, ${CardWidth}px);
    `};

    ${breakpoint('xl')`
        grid-template-columns: repeat(4, ${CardWidth}px);
    `};
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
