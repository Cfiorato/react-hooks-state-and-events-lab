import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [list, setList] = useState(items)
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const itemsToDisplay = list.filter((listItem) => {
    if (selectedCategory === 'All') {
      return true;
    } else {
      return listItem.category === selectedCategory
    }
  })

  function handleChange(e){
    setSelectedCategory(e.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange}name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
