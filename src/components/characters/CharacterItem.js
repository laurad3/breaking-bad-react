import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoint, map } from './../../breakpoints';

const CardWidth = 320;
const CardHeight = 380;

const CardFront = styled.div`
    width: 100%;
    backface-visibility: hidden;
    position: absolute;
    transition: transform .6s;
`;

const CardBack = styled.div`
    padding: 20px;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => (props.isOdd ? '#0a4a3d' : '#006534')};
`;

const CardInner = styled.div`
    position: relative;
    transition: transform .5s;
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
`;

const Card = styled.div`
    width: 100%;
    height: ${CardHeight}px;
    color: #fff;
    font-family: 'Libre Franklin', sans-serif;
    background-color: transparent;
    perspective: 1000px;

    ${breakpoint('md')`
        &:hover {
            ${CardInner} {
                transform: rotateY(180deg);
            }
        }
    `};
`;

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    min-height: ${CardHeight}px;
    max-height: ${CardHeight}px;
    display: block;
    object-fit: cover;
    object-position: 0 0;
`;

const CardBackTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const CardBackDescription = styled.div`
    font-size: 12px;
`;

const DescriptionItem = styled.p`
    line-height: 1.5;
`;

const CardBackStatus = styled.p`
    font-size: 12px;
    margin-bottom: 10px;
    opacity: .5;
`;

const CharacterItem = ({ item, isOdd }) => {
    const [isFlipped, setIsFlipped] =  useState(false);

    const flip = (target) => {
        const cardInner = target.querySelector('.card__inner');
        const windowSize = window.innerWidth;

        if (windowSize < 1200) {
            if (!isFlipped) {
                setIsFlipped(true);
                cardInner.style.transform = 'rotateY(180deg)';
            } else {
                setIsFlipped(false);
                cardInner.style.transform = 'rotateY(0)';
            }
        }
    };

    return(
        <Card isOdd={isOdd} className="card" onClick={(e) => flip(e.currentTarget)}>
            <CardInner className="card__inner">
                <CardFront className="card__front">
                    <CardImg src={item.img} alt={item.nickname} className="card__image" />
                </CardFront>
                <CardBack isOdd={isOdd} className="card__back">
                    <CardBackStatus className="card__back__status">{item.status}</CardBackStatus>
                    <CardBackTitle className="card__back__title">{item.name}</CardBackTitle>
                    <CardBackDescription className="card__back__description">
                        <DescriptionItem className="description__item">
                            <span>Portrayed by:</span> {item.portrayed}
                        </DescriptionItem>
                        <DescriptionItem className="description__item">
                            <span>Nickname:</span> {item.nickname}
                        </DescriptionItem>
                        <DescriptionItem className="description__item">
                            <span>Birthday:</span> {item.birthday}
                        </DescriptionItem>
                    </CardBackDescription>
                </CardBack>
            </CardInner>
        </Card>
    );
};

export default CharacterItem;