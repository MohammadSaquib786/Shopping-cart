import './SingleProductList.css'
import { GrAddCircle } from "react-icons/gr";
import { GrSubtractCircle } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/slices/cartSlice';

function SingleProductList({ product }) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cartReducer.cart);
    const curItem = cart.find(item => item.id == product.id);
    const curQuantity = curItem ? curItem.quantity : 0;

  return (
    <div className='SingleProductList'>
      <img className='productimage' src={product.images[1]} alt={product.title} />
      <div className="productInfo">
        <h2 className='productprice'>${product.price}</h2>
        <h2 className='producttitle'>{product.title}</h2> 
        <p>Category: {product.category.name}</p>
      </div>
      <div className="cardInfo">
      <GrSubtractCircle className='cart-button' onClick={() => dispatch(removeFromCart(product.id))}/>
        <h3>{curQuantity}</h3> 
      <GrAddCircle className='cart-button' onClick={() => dispatch(addToCart(product.id))} />
      </div>
    </div>
  )
}
export default SingleProductList