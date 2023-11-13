import './Card.css';
import { Link } from 'react-router-dom';


export default function Card (props) {
    return (
        <Link to={props.link}>
            <div className='card'>
            <img src={props.image} alt="" />
            <h3 className='title'>{props.title}</h3>
            <p className='price'>{props.price}</p>
        </div>
        </Link>
    )
}