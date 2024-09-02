// src/App.js
import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Group from './assets/components/Group';

const App = () => {
  return (
    <ChakraProvider >
       <Group></Group>
    </ChakraProvider>
  );
};

export default App;
