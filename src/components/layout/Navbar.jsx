import './Navbar.css';
import { NavLink } from 'react-router-dom';
import showcase from '../../assets/SHOPPE.png';
import Container from '../container/Container';


export default function Navbar () {
    return (
       <Container>
         <nav>
            <NavLink to='/'><img src={showcase}/></NavLink>
            <div className='nav-content'>
            <div className='nav-links'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/about'>Our Story</NavLink>  
            </div>
            <div className='nav-icons'>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-user"></i>
            </div>
            </div>
        </nav>
       </Container>
    )
}