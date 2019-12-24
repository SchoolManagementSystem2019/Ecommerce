import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HoverImage from "react-hover-image"

class Structure extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <HoverImage src={process.env.PUBLIC_URL + "Images/clothing.jpg"} alt = "ss" hoverSrc={process.env.PUBLIC_URL + "Images/clo_hover.jpg"} />
            </div>
            <div className="col-md-4">
              <img src={process.env.PUBLIC_URL + "Images/clothing.jpg"} alt="ss"  />
            </div>
            <div className="col-md-4">
              <img src={process.env.PUBLIC_URL + "Images/clothing.jpg"} alt="ss"  />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
                <img src={process.env.PUBLIC_URL + "Images/clothing.jpg"} alt="ss"  />
            </div>
            <div className="col-md-4">
              <img src={process.env.PUBLIC_URL + "Images/clothing.jpg"} alt="ss"  />
            </div>
            <div className="col-md-4">
              <img src={process.env.PUBLIC_URL + "Images/clothing.jpg"} alt="ss"  />
            </div>
            </div>
        </div>
      </div>
    )
  }
}
       
export default Structure;
