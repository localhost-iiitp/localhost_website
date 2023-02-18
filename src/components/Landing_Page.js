import React,{useState} from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";
import './Landing_Page.css'
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = NET({
      el: this.vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 500.00,
      minWidth: 500.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3ff3ff,
      backgroundColor: 0x0,
      points: 20.00,
      maxDistance: 15.00,
      spacing: 12.00,
      showDots: false
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy();
    }
  }
  enter(){

  }
  render() {



    return (

    
      <section className="section_head">
        <div className="main_box">
          <div style={{ height: "100vh", width: "100%" }} ref={this.vantaRef}  ></div>
        </div>
        <div className='main_heading'>
            <h2> 
                 <Link to="/about" className="btn btn-primary" data-text="&nbsp;localhost" >&nbsp;localhost&nbsp;</Link>
            </h2>
            <h4>dev <span>cult</span> of <span>iiitp...</span></h4>   
        </div>
      </section>

   
      
    );
  }
}

export default App;