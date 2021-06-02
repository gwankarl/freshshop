import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeadset, FaLocationArrow, FaOpencart, FaUser } from 'react-icons/fa'
export default function MainTop() { 
  return (
    // Start Main Top
    <div className="main-top">
      <div className="container-fluid">
        <div className="row">

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="custom-select-box">
              <select id="basic" data-placeholder="$ USD" className="selectpicker show-tick form-control">
                <option>¥ JPY</option>
                <option>$ USD</option>
                <option>€ EUR</option>
              </select>
            </div>
            <div className="right-phone-box">
              <p>Call US :- +11 900 800 100</p>
            </div>
            <div className="our-link">
              <ul>
                <li><Link to="/my-account"><FaUser /> My Account</Link></li>
                <li><Link to="/location"><FaLocationArrow />Our Location</Link></li>
                <li><Link to="/contact"><FaHeadset />Contact us</Link>  </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="login-box">
              <select  id="basic" className="selectpicker show-tick form-control" data-placeholder="Sign In">
                <option>Register Here</option>
                <option>Sign In</option>
              </select>
            </div>
            <div className="text-slide-box">
              <div id ="offer-box" className="carouselTicker">
                <ul className="offer-box">
                  <li className='active'><FaOpencart/>20% off Entire Purchase Promo code: offT80</li>
                  <li><FaOpencart/> 50% - 80% off on Vegetables</li>
                  <li><FaOpencart/>Off 10%! Shop Vegetables</li>
                  <li><FaOpencart/>Off 50%! Shop Now</li>
                  <li><FaOpencart/>50% - 80% off on Vegetables</li>
                  <li><FaOpencart/> Off 10%! Shop Vegetables</li>
                  <li><FaOpencart/>20% off Entire Purchase Promo code: offT30</li>
                  <li><FaOpencart/>Off 50%! Shop Now </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
