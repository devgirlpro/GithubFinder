import React from 'react';
import Navbar from './Components/Navbar';
import Users from './Users/Users';
import './App.css';

function App() {

  return (
    <React.Fragment>
      <div className='App'>
        <Navbar title="Github Finder" icon="fa-brands fa-github" />
        <Users />
      </div>
    </React.Fragment>
  );
}

export default App;
