import React from 'react';
import Logo from '../../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
  const favourite = useSelector(state => state.fav);

  return (
    <div className='page-header'>
      <img className='header-logo' src={Logo} alt="logo"></img>
      <div className='header-content'>
        <nav className='header-nav'>
          <ul className='header-nav-menu'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              {
                user ? 
                <Link to='/account'>Account</Link> :
                <Link to='/login'>login</Link>
              }
            </li>
          </ul>
        </nav>
        <ul className='header-social'>
          <li>
            {favourite.length ? <span>{favourite.length}</span> : ''}
            <i className="fa fa-heart" aria-hidden="true"></i>
          </li>
          <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
          <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
        </ul>
      </div>
    </div>
  )
}
