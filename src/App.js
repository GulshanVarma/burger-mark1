import React from 'react';
import BurgerBuilder from './container/BurgerBuilder'
import Layout from './component/UI/layout'
import classes from './App.module.css';
// import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        {/* <Route path="/checkout" component={}/> */}
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
