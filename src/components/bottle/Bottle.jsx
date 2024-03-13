import './Bottle.css'
import PropTypes from 'prop-types';
const Bottle = ({bottle,handleAddToCart}) => {
  const {name,price,img} = bottle;
  
  return (
    <div className="bottle">
      <img src={img}></img>
      <h3>Name: {name}</h3>
      <p>Price: ${price}</p>
      <button className='btn' onClick={()=>handleAddToCart(bottle)}>Add TO Cart</button>
    </div>
  );
};

Bottle.propTypes = {
  bottle:PropTypes.object.isRequired,
  handleAddToCart:PropTypes.func.isRequired
}

export default Bottle;