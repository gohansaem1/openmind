import { useState, useEffect, useRef } from "react";
import arrow_down from "../assets/icons/Stroke-down.svg";
// import arrow_up from "../assets/icons/Arrow-up.svg";

export default function Dropdown({ onChange }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [order, setOrder] = useState("time");
  const ORDER_KR = {
    time: "최신순",
    name: "이름순",
  };

  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleOrderChange = (order) => {
    setOrder(order);
    onChange(order);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-container">
      <div className="dropdown" ref={dropdownRef}>
        <div className="dropdown_button" onClick={toggleDropdown}>
          <div className="select">
            <span>{ORDER_KR[order]}</span>
            <img src={arrow_down} alt="arrow-down" />
          </div>
          {isDropdownOpen && (
            <ul className="dropdown_contents">
              <li onClick={() => handleOrderChange("name")}>이름순</li>
              <li onClick={() => handleOrderChange("time")}>최신순</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
