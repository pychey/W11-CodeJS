import React from "react";

export default function OrderCard({onPlus,onMinus,keyIndex,product,price,quantity}) {
  const format = (price) => "$ " + price;

  function getBackgroundColor(){
    return quantity > 0 ? {backgroundColor: ""} : {backgroundColor: "#bfbfbf"};
  }

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>{format(price)}</small>
      </div>

      <div className="order-quantity">
        <div className="order-button" style={getBackgroundColor()} onClick={quantity > 0 ? () => onMinus(keyIndex) : undefined}>-</div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={() => onPlus(keyIndex)}>+</div>
      </div>
    </div>
  );
}
