import React from 'react'
import './About.css'
export default function About() {
  return <>
    <div className='main text-center d-flex align-items-center justify-content-center flex-column'>
        <div className="icons">
        <h1 className='text-white'>ABOUT COMPONENT</h1>
        
        <i class="fa-solid fa-star text-white"></i>
        </div>
        <div className="container text-white ">
            <div className="row ">
                <div className="col-md-6 free ">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-6 free ">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </div>
    
    </>
}
