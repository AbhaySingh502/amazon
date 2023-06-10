import React from 'react'
import "../css/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    
    <div className='header'> 

      <img className='header_logo border' src= "https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=''/> 
      <div className="deliver border">
        <span className='deliver_textOne'>Deliver To</span>
        <span  className='deliver_textTwo'><LocationOnIcon/>India</span>
      </div>
      <div className='header_search '>
        <div className='header_dropdown'>All
                  <ArrowDropDownIcon/>
        </div>
        <input className='header_searchInput' type='text' placeholder='Search Amazon'/>
        <SearchIcon className='header_searchIcon' />
      </div>
    <div className='header_nav'>
        <div className='header_option border'>
        <span className='header_optionLineOne'>Hello</span>
            <span className='header_optionLineTwo'>Sign in</span>
        </div>
        <div className='header_option border'>
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'>& orders</span>
        </div>
        <div className='header_option border'>
        <span className='header_optionLineOne'>Your</span>
            <span className='header_optionLineTwo'>Prime</span>
        </div>
        <div className='header_optionbasket border'>
            <AddShoppingCartIcon/>
            <span className='header_optionLineOne header_BasketCount'>0</span>
        </div>
    </div>
    </div>      

    
  )
}

export default Header
