import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct,removeSelectedProduct } from '../redux/actions/Productactions';

const ProductDetails = () => {
  const product = useSelector((state) => state.product); // assuming you have a 'product' reducer in your store
  const { image, title, price, description, category } = product;
  console.log(product);
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      dispatch(selectedProduct(response.data));
    } catch (err) {
      console.log('Error in fetching id ', err);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetail();
      return()=>{
        dispatch(removeSelectedProduct())
      }
    }
  }, [productId, dispatch]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div className="ui active dimmer">
          <div className="ui loader"></div>
        </div>
      ) : (
        <div className="ui segment" style={{display:"flex",justifyContent:"center"}}>
          <div className="ui two column stackable grid">
            <div className="middle aligned row">
              <div className="column">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column">
                <h1 className="ui header">{title}</h1>
                <div className="ui teal label">${price}</div>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <button className="ui teal button">
                  <i className="shop icon"></i>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default ProductDetails;
