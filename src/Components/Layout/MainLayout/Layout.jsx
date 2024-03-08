import React from 'react';
import { Outlet } from 'react-router-dom';
import {  StickyNavbar } from '../../Shared/Navbar/Navbar';

const Layout = () => {
 return (
  <div className='max-w-7xl mx-auto'>
   <StickyNavbar></StickyNavbar>
   <Outlet></Outlet>
   footer
  </div>
 );
};

export default Layout;