import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache, ApolloClient } from '@apollo/client';
import { PokemonsComtainer } from './containers/PokemonsContainer';
import './App.css';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache()
  })
  
  return (
    <ApolloProvider client = {client}>
      <main>
        <PokemonsComtainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
