import React from 'react';
import WelcomePage from './components/WelcomePage'
import AuctionIndexPage from './components/AuctionIndexPage/index'
import AuctionShowPage from './components/AuctionShowPage/index'
import SignInPage from './components/SignInPage'
import Navbar from './components/NavBar'
import {User} from './request'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  } 


  componentDidMount() {
    this.getUser()
  }

  getUser() {
    User.current().then(data =>{ 
      this.setState((state) =>{
        return {
          currentUser: data
        }
      })
    })
  }


  render () {
    return (
      <BrowserRouter>
        <Navbar currentUser={this.state.currentUser}/>
      <div className="App">
      <Switch>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/sign_in" component={SignInPage} />
        <Route path="/auctions" exact component={AuctionIndexPage} />
        <Route path="/auctions/:id" exact component={AuctionShowPage} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;
