import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/pagenotfound.css";
const PageNotFound = () => {
  return (
    <div className="page-not-found">
        
        <div className="number">404</div>
        <div className="message">Page Not Found</div>
        <Link to='/'><button className="go-to-home">Home</button></Link>
    </div>
  );
};

export default PageNotFound;
