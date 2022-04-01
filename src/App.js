// import logo from './logo.svg';
// import './App.css';
import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom"; 
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import NewItemForm from "./components/NewItemForm";
import CurrentPackingList from "./components/CurrentPackingList";

function App() {
  const [allItems, setItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All")

function handleSelectCategory(event) {
  setSelectedCategory(event.target.value)
}

const categoryList = allItems.map((item) => {
  return item.category;
});

let uniqueCategoryList = ["All"];
  categoryList.forEach((category) => {
    if (!uniqueCategoryList.includes(category)) {
      uniqueCategoryList.push(category);
    }
  });

  const displayCategoryList = uniqueCategoryList.map((category, index) => {
      return <option key={index}>{category}</option>
  })

  useEffect(() => {
    fetch("http://localhost:3001/list")
    .then((resp) => resp.json())
    .then((items) => setItems(items))
  }, []);

  function handleAddingItem(newItem) {
    setItems([...allItems, newItem]);
  }

  function handleDeleteItem(deletedItem) {
    const updatedItems = allItems.filter((item) => item.id !== deletedItem.id)
    setItems(updatedItems)
  }

  function filteredCategory() {
    if (selectedCategory ==="All"){
      return allItems
    } else {
      return allItems.filter((item) =>
        item.category === selectedCategory
      )
    }
  }

  return (
    <div>
      <NavBar />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/newitemform">
        <NewItemForm onAddingItem={handleAddingItem} />
      </Route>
      <Route exact path="/currentpackinglist">
        <CurrentPackingList 
        allItems={filteredCategory()} 
        handleDeleteItem={handleDeleteItem}
        handleSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
        displayCategoryList={displayCategoryList}
        // handleSearchFilter={handleSearchFilter}
        // search={search}
        />
      </Route>
      <Route path="/*" >
      <h1>404</h1>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
