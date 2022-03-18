import React, { useState } from "react";

function NewItemForm({ onAddingItem }) {
  const [formData, setFormData] = useState({
    item: "",
    category: "",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
    .then(resp => resp.json())
    .then(newItem => onAddingItem(newItem))
  }

  return (
    <div>
      <h1 className="header">Submit New Packing Item Below</h1>
      <form id="form" onSubmit={handleSubmit}>
        <div className="input-field">
          <input type="text" name="item" placeholder="Item Name" value={formData.item} onChange={handleChange} />
        </div>
        <div className="input-field">
          <input type="text" name="category" placeholder="Item Category" value={formData.category} onChange={handleChange} />
        </div>
        <button type="submit">Submit Item</button>
      </form>
    </div>
  );
}

export default NewItemForm;
