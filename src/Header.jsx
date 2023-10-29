// // Header.js
// import React from 'react';

// function Header({ handleSwitch }) {
//   return (
//     <div>
//       <button onClick={() => handleSwitch('homepage')}>Home</button>
//       <button onClick={() => handleSwitch('favorites')}>Favorites</button>
//     </div>
//   );
// }

// export default Header;
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App({handleSwitch}) {
  const [showNav, setShowNav] = useState(false);

  return (
    <MDBNavbar expand='xl' light bgColor='light' style={{width:'100vw'}}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>RecipeMe</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNav(!showNav)}
        >
          <MDBIcon fas icon="angle-double-down" />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='homepage' onClick={() => handleSwitch('homepage')}>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='favorites' onClick={() => handleSwitch('favorites')}>Favorites</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}