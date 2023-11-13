import './Detail.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function Detail () {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetchData();
    }, [productId]);
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
return (
    <div className='detail'>
        <img src={products.image} alt="" />
        <div className='detail-content'>
            <p className='category'>{products.category}</p>
            <h2 className='detail-title'>{products.title}</h2>
            <p className='detail-desc'>{products.description}</p>
            <p className='detail-price'>${products.price}</p>
            <Link to='/'><button>Back {'>'}</button></Link>
        </div>
    </div>
)
}

