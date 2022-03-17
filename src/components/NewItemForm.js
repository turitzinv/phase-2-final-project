import React from "react";

function NewItemForm() {
  return (
    <div>
      <h1>Submit New Packing Item Below</h1>
      <form>
        <div class="input-field">
          <input id="item" type="text" />
          <label for="item"> Item</label>
        </div>
        <div class="input-field">
          <input id="category" type="text" />
          <label for="category"> Category</label>
        </div>
      </form>
    </div>
  );
}

export default NewItemForm;
