import { useState } from "react";

export default function StuffForm( {addStuff} ) {
  const [nameInput,setName] = useState("");
  const [priceInput,setPrice] = useState(0);

  return (
    <form className="stuff-form" onSubmit={(e)=>{e.preventDefault()}}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={e =>{setName(e.target.value)}}/>

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={e =>{setPrice(e.target.value)}}/>

      <button onClick={() => addStuff(nameInput,priceInput)}>Add Stuff</button>
    </form>
  );
}
