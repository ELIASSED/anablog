// src/components/Header.tsx


import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`

  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; /* Pour que la navbar soit au-dessus de l'image */
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #fff; 
`;

const Nav = styled.nav`
  display: flex;

`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff; /* Texte blanc pour plus de contraste */
`;

const Navbar: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo><NavLink  href="/">IDealer</NavLink></Logo>
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Navbar;
