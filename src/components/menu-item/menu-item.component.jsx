import React from "react";
import { useNavigate } from "react-router-dom";
import "./menu-item.style.scss";

const MenuItem = ({ title, size, imageUrl , linkUrl}) => {

  const navigate = useNavigate();
  
  return (
    <div 
      className={`menu-item ${size}`}
      onClick={()=> navigate(linkUrl)}
    >
      <div
        className="bg-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
