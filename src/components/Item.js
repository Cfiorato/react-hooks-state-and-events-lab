import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const itemClass = inCart ? 'in-cart' : ''
  const btnText = inCart ? 'Remove From Cart' : 'Add To Cart'
  function handleClick(){
    setInCart((inCart) => !inCart)
  }
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}className="add">{btnText}</button>
    </li>
  );
}

export default Item;
