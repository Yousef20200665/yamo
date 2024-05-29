import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footerr from '../Footer1/Footerr'
import axios from 'axios'


export default function Layout() {
  return<>
  <Navbar/>
<Outlet></Outlet>
  <Footer/>
  <Footerr/>
  </>
}
