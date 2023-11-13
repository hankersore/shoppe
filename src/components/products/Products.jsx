import './Products.css'
import Card from '../card/Card'
import Container from '../container/Container'
import React, { useState, useEffect } from 'react';


export default function Products () {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    return (
        <Container>
       <div className='products'>
       {products.map((product) => (
     <Card link={`/product/${product.id}`} key={product.id} image={product.image} title={product.title} price={product.price}/>
   ))}
       </div>
        </Container>
    )
}