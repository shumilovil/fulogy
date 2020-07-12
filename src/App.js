import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { BottomMenu } from './components/BottomMenu/BottomMenu';


function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <BottomMenu />
    </div>
  );
}

export default App;
