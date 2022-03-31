import React from "react";
import { v4 as uuidv4 } from "uuid";

const categoreis = ["Action", "science Fiction", "Economy"];
const AddNew = () => (
  <>
    <h2 className="add-book">Add New Book</h2>
    <form className="form">
      <input type="text" placeholder="Book title" name="title" />
      <select placeholder="Category" name="category">
        {categoreis.map((category) => (
          <option key={uuidv4()} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input type="submit" className="submit" value="Add Book" />
    </form>
  </>
);
export default AddNew;
