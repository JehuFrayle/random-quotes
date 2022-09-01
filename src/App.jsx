import React from 'react';
import './styles/App.css';
import { QuoteProvider } from './context/QuoteContext';
import Card from './Card';
import { Author } from './Author';

function App() {
  return (
    <QuoteProvider>
      <p>Actually... <a href='https://this-person-does-not-exist.com/en' target='blank'>they don't even exist</a></p>
      <Card/>
      <Author/>
    </QuoteProvider>
  );
}

export default App;
