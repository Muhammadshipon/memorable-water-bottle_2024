import { useEffect, useState } from "react";
import Bottle from "../bottle/Bottle";
import "./Bottles.css"
import { addToLS, getStoredCart, removeFromLS } from "../../utility/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles,setBottles] = useState([]);
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/memorable-water-bottle/main/public/bottles.json')
    .then(res => res.json())
    .then(data => setBottles(data));
  },[])

  useEffect(()=>{
    if(bottles.length){
      console.log(bottles.length)
    const storedCart = getStoredCart()
    console.log(storedCart,bottles);

    const savedCart = [];

    for(const id of storedCart){
      console.log(id)
      const bottle = bottles.find(bottle => bottle.id === id )
      
      if(bottle){
        savedCart.push(bottle);
      }
      
    }
    console.log('saved cart',savedCart);
    setAddCart(savedCart)
    
    }
    
  },[bottles])


   const [addCart, setAddCart] = useState([])

   const handleAddToCart =(bottle)=>{
    const newCart = [...addCart,bottle];
    setAddCart(newCart);
    addToLS(bottle.id)

  }
    const handleRemoveCart = (id)=>{
      const remainingCart = addCart.filter(bottle=>bottle.id !==id);
      setAddCart(remainingCart)
      removeFromLS(id);
    }

  return (
    <div>
      <h4>Bottles Available : {bottles.length}</h4>
     <Cart addCart={addCart} handleRemoveCart={handleRemoveCart}></Cart>
      <div className="bottles-container">
        {
          bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}
            handleAddToCart={handleAddToCart}></Bottle>)
        }
      </div>
    </div>
  );
};

export default Bottles;