import React from 'react';
import WelcomePage from './components/WelcomePage'
import AuctionIndexPage from './components/AuctionIndexPage/index'
import AuctionShowPage from './components/AuctionShowPage/index'
import Navbar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />
      <div className="App">
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/auctions" exact component={AuctionIndexPage} />
        <Route path="/auctions/:id" exact component={AuctionShowPage} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
