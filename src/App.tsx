import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

function App() {
  return (
   <div className='App' data-testid = "App-Id">
    <Header/>
    <Input/>
    <Button label="test"/>
   </div>
  );
}

export default App;
