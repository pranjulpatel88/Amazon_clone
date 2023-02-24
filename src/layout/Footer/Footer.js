import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './Footer.css'

function Footer() {
    const Scto = () =>{
        window.scrollTo(0,0);
    }
  return (
    <>
    <div className='Footer'>
    <a onClick={Scto}>
    <div className='FooterBottomToTop' >
    <ExpandLessIcon/>
    </div>
    </a>
      <div className='FooterVerRow' >
        <div className='"FooterVerCol' >
            <div className='FooterVerColHead' >Get To know Us</div>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Amazon Cares</li>
                <li>Gift Products</li>
            </ul>
        </div>

        <div className='"FooterVerCol' >
            <div className='FooterVerColHead' >Connect to us</div>
            <ul>
                <li>Meta</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
            </ul>
        </div>

        <div className='"FooterVerCol' >
            <div className='FooterVerColHead' >Make Money</div>
            <ul>
                <li>Amazon Pay</li>
                <li>Become a Affiliated</li>
                <li>Sell on Amazone</li>
                <li>Code with Newton School</li>
            </ul>
        </div>

      </div>
      <hr/>
      <div className='FooterLast' >
      <span className='FooterMess' >
        Amazon Clone &copy; Newton School
        </span>
      </div>
    </div>
    </>
  )
}

export default Footer
