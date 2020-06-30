import React from 'react';
import BurgerBuilder from './container/BurgerBuilder'
import Layout from './UI/layout'
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
