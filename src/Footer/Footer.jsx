import React from 'react'
import './Footer.css'

export default function Footer() {
  return <>
  <footer className=" fixed-bottom  text-white text-center ">
    <div className="row">
        <div className="col-md-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className="col-md-4">
            <h3>AROUND THE WEB</h3>
        </div>
        <div className="col-md-4">
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
  </footer>
  </>
}
