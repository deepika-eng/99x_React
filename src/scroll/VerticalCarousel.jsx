import React from 'react';
import {  FaBuilding } from 'react-icons/fa';
import { AiOutlineShop } from "react-icons/ai";
import { IoCashOutline } from "react-icons/io5";
import { ImLibrary } from "react-icons/im";
import { BiBookReader } from "react-icons/bi";
import { IoMdFitness } from "react-icons/io";
import { BsShop } from "react-icons/bs";
import { IoCarSportOutline } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { FaLaptop } from "react-icons/fa";
import './VerticalCarousel.css';

const VerticalCarousel = () => {
  const itemsColumn1 = [
    { text: 'D2C', icon:<AiOutlineShop />},
    { text: 'Health Tech', icon: <IoCashOutline /> },
    { text: 'B2B', icon: <FaBuilding /> },
    { text: 'FinTech', icon: <ImLibrary />},
    { text: 'Ed Tech', icon:  <BiBookReader />},
    { text: 'Personal care & Fitness',  icon: <IoMdFitness /> },
  ];

  const itemsColumn2 = [
    { text: 'B2C', icon:<BsShop /> },
    { text: 'FinTech', icon: <ImLibrary /> },
    { text: 'Personal care & Fitness',  icon: <IoMdFitness /> },
    { text: 'EdTech', icon:<BiBookReader /> },
    { text: 'Sports', icon: <IoCarSportOutline />},
    { text: 'E-commerce', icon:<GiShoppingCart /> },
    { text: 'Saas', icon: <FaLaptop />},
    
  ];

  return (
    <div className="carousel-container">
      <div className="left-side">
        <div className="main-text">
          <p className='ind'>Industries we</p>
          <p className='ser'>Serve</p>
          <p className="tagline">Dedicated to growing with businesses.</p>
        </div>                                                 
        
      </div>
      <div className="right-side">
        <div className="carousel-column">
          <div className="carousel-inner up">
            {itemsColumn1.map((item, index) => (
              <div className="carousel-item" key={index}>
                {item.icon} {item.text}
              </div>
            ))}
            {itemsColumn1.map((item, index) => (
              <div className="carousel-item" key={index + itemsColumn1.length}>
                {item.icon} {item.text}
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-column">
          <div className="carousel-inner down">
            {itemsColumn2.map((item, index) => (
              <div className="carousel-item" key={index}>
                {item.icon} {item.text}
              </div>
            ))}
            {itemsColumn2.map((item, index) => (
              <div className="carousel-item" key={index + itemsColumn2.length}>
                {item.icon} {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalCarousel;