import { useState } from "react"
import React from 'react'

const About = () =>{
  const [style,setStyle] = useState(
   {
    backgroundColor: 'white',
    color : 'black',
    border: '2px solid white',padding: '10px',
    marginTop: '10px',
    transition: 'ease 0.4s'
  });
  const darkMode = () =>{
    if(style.color === 'black')
    {
      setStyle({
        backgroundColor: 'black',
        color : 'white',
        border: '2px solid black',padding: '10px',
        marginTop: '10px',
        transition: '0.4s'
      })
    }
  }
  const lightMode = () =>{
    if(style.color === 'white')
    {
      setStyle({
        backgroundColor: 'white',
        color : 'black',
        border: '2px solid white',padding: '10px',
        marginTop: '10px',
        transition: '0.4s'
      })
    }
  }
  return (
  
    <div className='container my-3' style={style}>
      <h1>About Us</h1>
              <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" style={style}type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div>
        <button type="button" onClick={darkMode} className="btn btn-primary mx-3">Enable Dark Mode</button>
        <button type="button" onClick={lightMode} className="btn btn-primary mx-3">Enable Light Mode</button>
    </div>
  )
}
export default About;