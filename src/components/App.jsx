import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <div className="app">
        <h1>Hello World!</h1>
        <p>Check out the README <a href='https://github.com/Wiegand92/RegexSite'>here</a></p>
      </div>
    </ChakraProvider>
  );
};

export default App;