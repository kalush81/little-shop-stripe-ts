import { NavLink } from 'react-router-dom';
import './navbar.css';
import { Container } from '../atoms';


export default function Navbar() {
  return (
    

    <nav className="">
        
 <Container className='navbar'>

      <NavLink to="/" className="nav-brand">
        MyPaintings
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive? 'active' : undefined } to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({isActive}) => isActive? 'active' : undefined }>
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" className={({isActive}) => isActive? 'active' : undefined }>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart (0)
          </NavLink>
        </li>
      </ul>
 </Container>
      
    </nav>
    
  );
}