import React from 'react';
import BurgerBuilder from './container/BurgerBuilder'
import Layout from './UI/layout'
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
