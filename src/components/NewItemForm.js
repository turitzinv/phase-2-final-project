import React, { useState } from "react";

function NewItemForm({ onAddingItem }) {
  const [formData, setFormData] = useState({
    item: "",
    category: "",
  });
  const max = ({
    item: 10,
    category: 20,
  })
 
  const [maxCharacter, setMaxCharacter] = useState({
    item: max.item,
    category: max.category,
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    setMaxCharacter({
      ...maxCharacter,
      [event.target.name]: max[event.target.name] - event.target.value.length
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3001/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: formData.item,
        category: formData.category,
      }),
    })
      .then((resp) => resp.json())
      .then((newItem) => {
        onAddingItem(newItem)
        alert("Item Submitted!")
      })
  }

  return (
    <div>
      <h1 className="header">Submit New Packing Item Below</h1>
      <form id="form" onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            name="item"
            placeholder="Item Name"
            value={formData.item}
            onChange={handleChange}
          />
        </div>
        <p>You have {maxCharacter.item} characters left</p>
        <div className="input-field">
          <input
            type="text"
            name="category"
            placeholder="Item Category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <p>You have {maxCharacter.category} characters left</p>
        <button type="submit">Submit Item</button>
      </form>
      <img
        id="list-picture"
        src="https://user-images.githubusercontent.com/93049794/159100119-5c6a4f0c-a775-47fa-9461-0fd77d19257c.jpg"
        alt="packing-list"
        width="410"
        height="350"
      />
    </div>
  );
}

export default NewItemForm;

// maximum number of string length
// name :20
// category :30

// As the user is typing, show under input field how many characters they have left

// using state, default value of the max string length

// <p> you have {maxCharacter} characters left
// maxCharacter.name
