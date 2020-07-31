import React from 'react';
import BurgerBuilder from './container/BurgerBuilder'
import Layout from './component/UI/layout'
import classes from './App.module.css';
import Checkout from './container/Checkout/Checkout'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className={classes.App}>
      <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/" component={BurgerBuilder}/>
      </Switch>
      </Layout>
    </div>
  );
}

export default App;
