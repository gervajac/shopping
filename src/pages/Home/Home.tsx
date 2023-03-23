import React from 'react';
import { Card } from '../../components/Card';
import { NavBar } from '../../components/NavBar';
import { Provider } from '../../context/Provider';
export interface HomeProps {}

const Home : React.FC<HomeProps> = () => {
	return (
		<Provider>
		<NavBar/>
		<Card/>
		</Provider>
	);
};

export default Home;
