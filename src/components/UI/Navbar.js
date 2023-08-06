import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  let cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <header>
    <nav className="navbar sticky-top navbar-expand-sm navbar-primar bg-primary">
      <div className="container">
        
        <Link to="/homepage" className="navbar-brand">
          <h4 className="text-light d-inline-flex">Perfect Snack <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-cup-straw" viewBox="0 0 16 16">
  <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82 0 .046-.004.09-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87-1.516 0-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A.78.78 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278zM9.768 4.607A13.991 13.991 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.284 3.284 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085l.18-.808zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a5.514 5.514 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69 1.27 0 2.081-.441 2.438-.69.042-.029.09-.094.102-.215l.852-8.03a5.517 5.517 0 0 1-.435.127 8.88 8.88 0 0 1-.89.17zM4.467 4.884s.003.002.005.006l-.005-.006zm7.066 0-.005.006c.002-.004.005-.006.005-.006zM11.354 5a3.174 3.174 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222z"/>
</svg></h4>
        </Link>

        <div id="Navbar">
          <Link to='/cart'>
          <button type="button" class="btn btn-success">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-cart3"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span class="badge badge-light">{cartQuantity}</span>
          </button>
          </Link>
          
        </div>
      </div>
    </nav>

    <div
    class="p-5 text-center bg-image"
    style={{
      "backgroundImage": "url('https://images.pexels.com/photos/1596884/pexels-photo-1596884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      "backgroundSize": "cover",
      "backgroundRepeat": "no-repeat",
      "height": "450px"
    }}
  >
    <div class="mask" style={{"backgroundColor": "rgba(0, 0, 0, 0.6)"}}>
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-info">
          <br/>
          <h1 class="mb-3">Welcome To Feast</h1>
          <h4 class="mb-3">One of the finest food and restaurant theme on net, expore it and enjoy it.</h4>
          <a class="mb-4 btn btn-primary btn-lg"  href="#meals" role="button"
          >Check Our food</a
          >
        </div>
      </div>
    </div>
  </div>

    </header>
  );
};

export default Navbar;
