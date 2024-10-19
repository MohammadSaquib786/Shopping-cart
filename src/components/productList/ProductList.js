import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {fetchData} from '../../redux/slices/productSlice';
import SingleProductList from '../singleProductList/SingleProductList'
import './ProductList.css';

function ProductList() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.productReducer.products); 
    const status = useSelector(state => state.productReducer.status);
    const error = useSelector (state => state.productReducer.error);

    useEffect(() =>{
        dispatch(fetchData())
    },[])

    if(status === 'loading'){
        return(<div className="mainbutton">
          <div className="up">
            <div className="loaders">
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
              <div className="loader"></div>
            </div>
            <div className="loadersB">
              <div className="loaderA">
                <div className="ball0"></div>
              </div>
              <div className="loaderA">
                <div className="ball1"></div>
              </div>
              <div className="loaderA">
                <div className="ball2"></div>
              </div>
              <div className="loaderA">
                <div className="ball3"></div>
              </div>
              <div className="loaderA">
                <div className="ball4"></div>
              </div>
              <div className="loaderA">
                <div className="ball5"></div>
              </div>
              <div className="loaderA">
                <div className="ball6"></div>
              </div>
              <div className="loaderA">
                <div className="ball7"></div>
              </div>
              <div className="loaderA">
                <div className="ball8"></div>
              </div>
            </div>
          </div>
        </div>)    
    }
    if(status === 'failed'){
        return <>
      <h3 style={{display:"flex",justifyContent:'center'}}>404 Error</h3>
        <p style={{display:"flex",justifyContent:'center'}}>{error}</p>
        </>
    }

    
  return (
    <div className='ProductList'>
        {
            products?.map(item => <SingleProductList  key={item.id} product ={item}/>)
        }
    </div>
  )
}

export default ProductList
