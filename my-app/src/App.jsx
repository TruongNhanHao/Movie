import Header from './Components/Header';
import React from 'react';
import Home from './Components/Home';
import GlobalStyle from './GlobalStyle';
import { Switch , Route} from "react-router";

import Movie from './Components/Movie';
import UserProvider from './context';
import { Login } from './Components/Login';
// import NotFound from './Components/NotFound'
function App() {
  return (
    <div className="App">
        <UserProvider>
       <Header />
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/login" exact><Login /></Route>
        
        <Route path="/:movieId" exact><Movie /></Route>
      </Switch>
       <GlobalStyle />
        </UserProvider>
     
    </div>
  );
}




export default App;
