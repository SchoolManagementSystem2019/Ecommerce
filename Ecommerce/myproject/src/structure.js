import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HoverImage from "react-hover-image";
// import Details from './details';

class Structure extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
                <HoverImage id="abc" src={process.env.PUBLIC_URL + "Images/Stitched/clothing.jpg"} alt="red" hoverSrc={process.env.PUBLIC_URL + "Images/Stitched/clo_hover.jpg"} />
            </div>
            <div className="col-md-4">
              <HoverImage src={process.env.PUBLIC_URL + "Images/Stitched/black_front.jpg"} alt="black" hoverSrc={process.env.PUBLIC_URL + "Images/Stitched/black_back.jpg"} />
            </div>
            <div className="col-md-4">
              <HoverImage src={process.env.PUBLIC_URL + "Images/Stitched/cream_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "Images/Stitched/cream_back.jpg"} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <HoverImage src={process.env.PUBLIC_URL + "Images/Stitched/peach_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "Images/Stitched/peach_back.jpg"} />
            </div>
            <div className="col-md-4">
              <HoverImage src={process.env.PUBLIC_URL + "Images/Stitched/purple_front.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "Images/Stitched/purple_back.jpg"} />
            </div>
            <div className="col-md-4">
              <HoverImage src={process.env.PUBLIC_URL + "Images/Stitched/clothing.jpg"} alt="ss" hoverSrc={process.env.PUBLIC_URL + "Images/Stitched/clo_hover.jpg"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Structure;
