import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MainHeader = styled.header`
    margin-bottom: 50px;
`;

const Img = styled.img`
    width: 200px;
    margin: 0 auto;
    display: block;
`;

const Header = () => {
    return (
        <MainHeader className="header">
            <Img src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2010/12/logo_bb_stacked-C.png" alt="" />
        </MainHeader>
    );
};

export default Header;