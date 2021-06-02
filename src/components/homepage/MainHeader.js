import React from 'react'
import { FaSearch, FaShoppingBag, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function MainHeader() { 
  return (
    <div className="main-header">  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">

          {/* Start Header Navigation  */}
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className='navbar-brand'><img src="images/logo.png" className="logo" alt="logo" /></Link>
          </div>
          {/* End Header Nav  */}

          {/* Collect the nav links, forms, and other content for toggling */}  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav ms-auto">
              <li className="nav-item"><Link to='/' className="nav-link active" aria-current="page">Home</Link></li>
              <li className="nav-item"><Link to='/about' className="nav-link">About Us</Link></li>
              <li className="dropdown">
                <Link to="/shop" className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">SHOP</Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/shop">Sidebar Shop</Link></li>
                  <li><Link className="dropdown-item" to="/shop-detail">Shop Detail</Link></li>
                  <li><Link className="dropdown-item" to="/cart">Cart</Link></li>
                  <li><Link className="dropdown-item" to="/checkout">CheckOut</Link></li>
                  <li><Link className="dropdown-item" to="/my-account">My Account</Link></li>
                  <li><Link className="dropdown-item" to="/wishlist">Wishlist</Link></li>
                </ul>
              </li>
              <li className="nav-item"><Link to='/gallery' className="nav-link">Gallery</Link></li>
              <li className="nav-item"><Link to='/contact' className="nav-link">Contact us</Link></li>
            </ul>
          </div>
          {/* /.navbar-collapse */}

          {/* Start Atribute Navigation */}
          <div className="attr-nav">
            <ul>
              <li className="search"><Link to="/search"><FaSearch /></Link></li>
              <li className="side-menu">
                <Link to="/">
                  <FaShoppingBag />
                  <span className="badge">3</span>
                  <p>My Cart</p>
                </Link>
              </li>
            </ul>
          </div>
          {/* End Attribute Nav  */}

        </div>

        {/* Start Side Menu  */}
        <div className="side">
          <Link to="/" className="close-side"><FaTimes /></Link>
          <li className="cart-box">
            <ul className="cart-list">
              <li>
                  <Link to='/' className="photo"><img src="images/img-pro-01.jpg" className="cart-thumb" alt="pro" /></Link>
                  <h6><Link to='/'>Delica omtantur </Link></h6>
                  <p>1x - <span className="price">$80.00</span></p>
              </li>
              <li> 
                  <Link to='/' className="photo"><img src="images/img-pro-02.jpg" className="cart-thumb" alt="pro" /></Link>
                  <h6><Link to='/'>Omnes ocurreret</Link></h6>
                  <p>1x - <span className="price">$60.00</span></p>
              </li>
              <li>
                  <Link to='/' className="photo"><img src="images/img-pro-03.jpg" className="cart-thumb" alt="pro" /></Link>
                  <h6><Link to='/'>Agam facilisis</Link></h6>
                  <p>1x - <span className="price">$40.00</span></p>
              </li>
              <li className="total">
                  <Link to='/' className="btn btn-default hvr-hover btn-cart">VIEW CART</Link>
                  <span className="float-right"><strong>Total</strong>: $180.00</span>
              </li>
            </ul>
          </li>
        </div>
        {/* End Side Menu  */}
      </nav>
      {/* End Navigation  */}
    </div>
    // End Navigation 
  )
}
