import PropTypes from 'prop-types'; 
import'./Cart.css'
const Cart = ({addCart,handleRemoveCart}) => {
  return (
    <div>
       <h3>ADD TO CART: {addCart.length}</h3>
       <div className="cart-container">
        {addCart.map(bottle=>
          <div key={bottle.id}>
          <img src={bottle.img}  alt=''></img>
          <button onClick={()=>handleRemoveCart(bottle.id)}>Remove</button>
        </div>
        
          
          )}
       </div>
    </div>
  );
};

Cart.propTypes = {
  addCart:PropTypes.array.isRequired,
  handleRemoveCart:PropTypes.func.isRequired
}

export default Cart;