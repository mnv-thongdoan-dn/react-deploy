import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addFav } from '../../../slices/FavouriteSlice';

export default function ProductItem({product}) {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const favourite = useSelector(state => state.fav);
  const {title, image, price, description, id} = product;

  const handleFav = (id) => {
    dispatch(addFav(id));
  };

  return (
    <div className='product-item'>
      <ul className='options-layout'>
        <li><i onClick={() => handleFav(id)} className={`fa fa-heart ${favourite.includes(id) ? 'red' : ''}`} aria-hidden="true"></i></li>
      </ul>
      <img className='product-item-image' src={image} alt={image} />
      <div className='product-item-content'>
        <p className='text-wrapper'>
          <span className='product-name' onClick={()=> history.push(`/product/${id}`)}>{title}</span>
          <span className='product-price'>{price}</span>
        </p>
        <p className='product-des'>{description}</p>
      </div>
      <button className='product-item-btn'>Add To Cart</button>
    </div>
  )
}
