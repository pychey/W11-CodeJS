import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);

  function getTotalPrice(orders){
    let total = 0;
    orders.forEach(order => {
      total += order.price * order.quantity;
    });
    return total;
  }

  function onMinus(clickKeyIndex){
    const updatedOrder = orders.map((order,index)=>{
      if(index===clickKeyIndex) return {...order, quantity: order.quantity - 1}
      else return order;
    });
    setOrders(updatedOrder);
  }

  function onPlus(clickKeyIndex){
    const updatedOrder = orders.map((order,index)=>{
      if(index===clickKeyIndex) return {...order, quantity: order.quantity + 1}
      else return order;
    });
    setOrders(updatedOrder);
  }

  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
        {orders.map((order,index)=>(
          <OrderCard onPlus={onPlus} onMinus={onMinus} key={index} keyIndex={index} product={order.product} price={order.price} quantity={order.quantity}></OrderCard>))}
      </div>

      <CheckoutButton total={getTotalPrice(orders)}></CheckoutButton>
    </>
  );
}
