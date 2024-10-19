import React, { useEffect, useState } from 'react'
import './CartDetail.css'
import { MdOutlineNavigateNext } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function CartDetail() {
    const [cartData, setCartData] = useState([])
    const [sum, setSum] = useState(0);
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cartReducer.cart);
    let count = () => {
        let TotalValue = 0;
        cart.forEach((i) => {
            TotalValue += i.quantity;
        })
        return TotalValue;
    }

    let totalsum = () =>{
        let totalsumvalue = 0;
        cartData.forEach((item)=>{
            totalsumvalue += item.price ;
        })
        return totalsumvalue;
    }
         console.log('totalsum', totalsum ())

        let addon = () => {
            let addonvalue = 0;  
            addonvalue = totalsum() * 18 / 100;
            return addonvalue + totalsum();
        }
        addon()
        console.log('addon', addon());
   

    async function getDetail(id) {
        try {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
    // useEffect(() => {
    //     cart.forEach((item) => {
    //         const id = item.id;
    //         const data = getDetail(item.id)
    //         setCartData(...cartData, data)
    //     });
    // }, [cart])

    useEffect(() => {
        async function fetchData() {
            const cartDetails = await Promise.all(cart.map(async (item) => {
                const data = await getDetail(item.id);
                return data;
            }));
            setCartData(cartDetails);
        }
        fetchData();
    }, [cart])

    return (
        <div className='TopDiv'>
            <h2>Shopping Cart</h2>
            <div className="navigate">
                <div className="navigateDetail">
                    <p style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Home</p>
                    <p style={{ marginTop: '2px' }} > <MdOutlineNavigateNext /></p>
                    <p style={{ cursor: 'pointer' }} onClick={() => navigate('/cartdetail')}>Shopping Cart</p>
                </div>
                <div className="noofitem"> <p>{count()} Items in a Bag</p> </div>
            </div>
            <div className='Cart-Detail'>
                {cartData.map((item, index) => (
                    <div className='product-detail' key={index}>
                        <img src={item?.images[0]} alt={item?.title} width='200px' style={{  borderTopLeftRadius: "18px" , borderBottomLeftRadius: '18px'}} />
                        <div className="cart-text">
                            <h4>{item?.title}</h4>
                            <p className='description'>{item?.description}</p>
                            <h2>${item?.price}</h2>
                        </div>
                        <p className='quantity-button'> {cart[index]?.quantity}</p>
                    </div>
                ))}
            </div>
        
                <div className="footer-div">
                 
                  <form>
                    <p>Have A Promo Code?</p>
                    <input className='input-promo' type="text"
                     />
                  </form>
                  <div className="payment">
                <h4>SubTotal: ${totalsum()}</h4>
                <h4>Tex: $18%</h4>
                <h3>Total: ${addon()}</h3>
                </div>
              </div>  
        </div>
    )
}

export default CartDetail
