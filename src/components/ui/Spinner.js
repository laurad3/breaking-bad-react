import React from 'react';
import styled, {keyframes} from 'styled-components';

const Bounce = keyframes`
    0%, 75%, 100% {
        transform: translateY(0px);
    }

    25% {
        transform: translateY(-15px);
    }
`;

const Spin = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50% -50%);
`;

const Bullet = styled.span`
    display: block;
    height: 6px;
    width: 6px;
    background: #c7a65a;
    border-radius: 50%;
    position: absolute;
    top: 0;

    &:nth-child(1) {
        left: 15px;
        animation: ${Bounce} 1s ease-in-out .4s infinite;
    }

    &:nth-child(2) {
        animation: ${Bounce} 1s ease-in-out .2s infinite;
    }

    &:nth-child(3) {
        left: -15px;
        animation: ${Bounce} 1s ease-in-out infinite;
    }
`;

const Spinner = () => {
    return (
        <Spin className="spinner">
            <Bullet></Bullet>
            <Bullet></Bullet>
            <Bullet></Bullet>
        </Spin>
    );
};

export default Spinner;