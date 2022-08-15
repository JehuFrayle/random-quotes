import './styles/App.css';
import { Fragment } from 'react';
import Card from './Card';

function App() {
  return (
    <Fragment>
      <p>Actually... <a href='https://this-person-does-not-exist.com/en' target='blank'>they don't even exist</a></p>
      <Card/>
    </Fragment>
  );
}

export default App;
