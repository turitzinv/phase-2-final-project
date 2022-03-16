// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Route } from "react-router-dom"; //Switch not used due to error
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewItemForm from "./components/NewItemForm";
import CurrentPackingList from "./components/CurrentPackingList";

function App() {
  return (
    <div>
      <NavBar />
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/newitemform">
        <NewItemForm />
      </Route>
      <Route exact path="/currentpackinglist">
        <CurrentPackingList />
      </Route>
    </div>
  );
}

export default App;
