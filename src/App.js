import React from 'react';
import Navbar from './Components/Navbar';
import UserItem from './Users/UserItem';
import './App.css';

function App() {

  return (
    <React.Fragment>
      <div className='App'>
        <Navbar title="Github Finder" icon="fa-brands fa-github" />
        <UserItem />
      </div>
    </React.Fragment>
  );
}

export default App;
