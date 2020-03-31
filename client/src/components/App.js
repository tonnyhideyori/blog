import React,{Component} from 'react'; 
import Header from './Header'
import Home from './Home'
import Landing from './Landing'
import {BrowserRouter,Route} from 'react-router-dom'
import Signin from './Signin';
import Signup from "./Signup"
import Profile from './Profile'
import Blog from './Blog';

class App extends Component{ 
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
          <Header />
          <Route exact path="/" component={Landing} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path ="/blog" component={Blog}/>
            </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
