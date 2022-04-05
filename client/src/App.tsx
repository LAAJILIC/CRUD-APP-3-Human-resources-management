import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import CreateEmployee from './Components/CreateEmployee';
import './App.css';
import ListOfEmployees from './Components/ListOfEmployees';

function App() {

  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
    });
  return (
    <>
    <ApolloProvider client={client}>
      <CreateEmployee />
      <ListOfEmployees />
    </ApolloProvider>
    </>
  );
}

export default App;
