import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import DataSelector from './components/DataSelector';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'https://api.spacex.land/graphql/',
});

function App() {
	return (
		<ApolloProvider client={client}>
      <h1 className='header'>Space X Explorer</h1>
      <DataSelector />
		</ApolloProvider>
	);
}

export default App;
