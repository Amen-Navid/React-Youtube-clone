import React, { useRef } from "react";
import "./Style.css";

const categories = [
  "Home",
  "Trending",
  "Subscriptions",
  "Library",
  "History",
  "Your videos",
  "Watch later",
  "Liked videos",
  "Music",
  "Gaming",
  "Sports",
  "Movies",
  "News",
  "Live",
  "Fashion",
  "Learning",
];

const TopNav = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 100; 
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 100; 
    }
  };

  return (
    <div className="top-bar-categories">
      <div className="scroll-arrow left-arrow" onClick={scrollLeft}>
        &lt;
      </div>
      <ul ref={scrollContainerRef}>
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            {category}
          </li>
        ))}
      </ul>
      <div className="scroll-arrow right-arrow" onClick={scrollRight}>
        &gt;
      </div>
    </div>
  );
};

export default TopNav;
