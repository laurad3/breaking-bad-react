import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import styled from 'styled-components';
import bg from './images/background.jpg';

const Main = styled.div`
	background-image: url(${bg});
	padding: 50px 20px;
	min-height: 100vh;
`;

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('');
	
	useEffect(() => {
        // async before a function ensures it always returns a promise
        const fetchItems = async() => {
            // keyword await makes js wait until that promise settles and returns its result
            const result = await axios(
                `https://www.breakingbadapi.com/api/characters?name=${query}`
            );

			setItems(result.data);
			setIsLoading(false);
        }

        fetchItems();
	}, [query]);
	// whenever query is changed, useEffect is fired

	return (
        <Main className="main">
            <Header />
			<Search getQuery={(q) => setQuery(q)} />
			<CharacterGrid isLoading={isLoading} items={items} />
        </Main>
	);
}

export default App;
