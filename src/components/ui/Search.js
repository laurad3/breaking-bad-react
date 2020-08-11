import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { breakpoint, map } from './../../breakpoints';

const SearchBar = styled.section`
    margin-bottom: 50px;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid #c7a65a;
    font-family: 'Libre Franklin', sans-serif;
    padding: 10px 5px 7px;
    color: #c7a65a;
    background-color: transparent;
    display: block;
    font-weight: bold;
    letter-spacing: .2px;
    width: 100%;
    font-size: 16px;

    &::placeholder {
        color: #c7a65a;
    }

    &:focus {
        outline-style: thin;
        outline-color: #c7a65a;
    }

    ${breakpoint('xl')`
        font-size: 13px;
    `};
`;

const Form = styled.form`
    position: relative;
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
`;

const CloseIcon = styled.span`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #fff;
    display: ${props => props.isActive ? 'block' : 'none'};

    &:hover {
        cursor: pointer;
    }
`;

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');
	const [isActive, setIsActive] = useState(false);

    const onChange = (q) => {
        if (q === '') {
            setIsActive(false);
        } else {
            setIsActive(true);
        }

        setText(q);
        getQuery(q);
    }

    const onClickCloseIcon = () => {
        setText('');
        getQuery('');
        setIsActive(false);
    }

    return (
        <SearchBar className="search-bar">
            <Form className="form">
                <Input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search characters"
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus />
                <CloseIcon className="close-icon" onClick={() => onClickCloseIcon()} isActive={isActive}>
                    <FontAwesomeIcon icon={faTimes}/>
                </CloseIcon>
            </Form>
        </SearchBar>
    );
};

export default Search;