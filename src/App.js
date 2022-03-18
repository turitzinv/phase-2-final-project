// import logo from './logo.svg';
// import './App.css';
import React, {useState, useEffect} from "react";
import { Route } from "react-router-dom"; //Switch not used due to error
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewItemForm from "./components/NewItemForm";
import CurrentPackingList from "./components/CurrentPackingList";

function App() {
  const [allItems, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/list")
    .then((resp) => resp.json())
    .then((items) => setItems(items))
  }, []);

  function handleAddingItem(newItem) {
    setItems([...allItems, newItem]);
  }

  return (
    <div>
      <NavBar />
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/newitemform">
        <NewItemForm onAddingItem={handleAddingItem} />
      </Route>
      <Route exact path="/currentpackinglist">
        <CurrentPackingList allItems={allItems}/>
      </Route>
    </div>
  );
}

export default App;
