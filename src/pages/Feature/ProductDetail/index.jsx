import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_PRODUCTS } from "../../../core/constants";
import { getProduct } from "../../../core/services";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { title, image, price, description } = product;

  useEffect(() => {
    const getProducts = () => {
      getProduct(API_PRODUCTS, id)
      .then((res) => {
        setProduct(res)
        setLoading(!loading);
      })
    };

    getProducts();
  }, [id]);


  return (
    <div className='product-detail'>
      <img className='product-detail-image' src={image} alt={image} />
      <div className='product-detail-content'>
        <p className='text-wrapper'>
          <span className='product-name'>{title}</span>
          <span className='product-price'>{price}</span>
        </p>
        <p className='product-des'>{description}</p>
      </div>
      <button className='product-detail-btn'>Add To Cart</button>
    </div>
  );
}

export default ProductDetail;
