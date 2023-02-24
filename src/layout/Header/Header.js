import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Product from './Product';


function Header() {
    const products = useSelector((state)=> state.cart);
    let arr =[];
    products.map((product, id) => {
        arr.push(product)
    })
    function removeDuplicateObjects(arr) {
        let unique_array = arr.filter(function (elem, index, self) {
            return index === self.findIndex(function (t) {
                return JSON.stringify(t) === JSON.stringify(elem);
            });
        });
        return unique_array;
    }

    let uniqueArr = removeDuplicateObjects(arr);
    console.log(uniqueArr)
  return (
<>
   <nav className="header">
    <div className='headerTop' >
        <div className='headerLeftNav' >
            <MenuIcon/>
        </div>

        {/* logo*/}
        <Link to="/">
            <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' className='logo' />
            

        </Link>
        {/* logo*/}

        {/* Search - box */}
        <div className='headerSearch'>
            <input className='headerSearchInput' />
            <SearchIcon className='headerSearchIcon' />
        </div>
        {/* Search - box */}

        {/* Links */}
        <div className='headerNavbar' >
            {/* signout/ signin */}
            <Link to="/Login" className='headerLink' >
                <div className='headerOptions' >
                    <span className='headerOption_One'>Hello</span>
                    <span className='headerOption_One'>User</span>
                </div>
            </Link>
            

            {/*Return Order */}
            <Link to="/Orders" className='headerLink' >
                <div className='headerOptions' >
                    <span className='headerOption_One'>Return</span>
                    <span className='headerOption_Two'>Order</span>
                </div>
            </Link>
            {/*Prime */}
            <Link to="/" className='headerLink' >
                <div className='headerOptions' >
                    <span className='headerOption_One'>Return</span>
                    <span className='headerOption_Two'>Home</span>
                </div>
            </Link>
            {/*profile */}
            <Link to="/Profile" className='headerLink' >
                <div className='headerOptions' >
                    <span className='headerOption_One'>Your</span>
                    <span className='headerOption_Two'>Profile</span>
                </div>
            </Link>
            {/*Basket */}
             <Link to="/Cart" className='headerLink' >
                <div className='headerOptions_Basket' >
                   <ShoppingBasketIcon />
                    <span className='headerOption_Two basketCount'>{uniqueArr.length}</span>
                </div>
            </Link>
        </div>

        {/* Links */}


    </div>

{/* Navbar Bottom */}

<div className='headerBottom' >
{/* Address */}
<div className='headerAddress' >
    <div className='headerAddress_Icon' >
    <LocationOnIcon/>
    </div>
    <div className='headerOptions' >
                    <span className='headerOption_One'>Delivery To </span>
                    {/* <span className='headerOption_Two'>Easy Coding</span> */}
                </div>
    
</div>
{/* Header Bottom Navbar */}
  <div className='headerBottom_Navbar' >
  <span>
        <Link to="/ListProducts" className='headerLink' >All Products</Link>
    </span>
    <span>Book</span>
    <span>New Realease</span>
    <span>Gift Ideas</span>
    <span>Easy Coding</span>
    <span>Amazon Pay</span>
</div>
  </div>

{/* Navbar Bottom */}

   </nav>
</>
  )
}

export default Header;
