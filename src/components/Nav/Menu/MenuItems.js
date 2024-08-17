import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';

// Data for menu items
const headersData = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Work", id: "work" },
  { label: "Contact", id: "contact" },
];

export default function MenuItems() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <MenuItemStyle>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={isOpen ? 'open' : ''}>
        {headersData.map(item => (
          <li key={item.id}>
            <StyledLink
              to={item.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.label}
            </StyledLink>
          </li>
        ))}
      </ul>
    </MenuItemStyle>
  );
}

// Styled components
const MenuItemStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1); /* Semi-transparent background */
  color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* More pronounced shadow */
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center; /* Center items on desktop */

  &:hover {
    background: rgba(0, 0, 0, 0.1); /* Darken background on hover */
  }

  .menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-left: auto; /* Push toggle button to the right */

    .bar {
      width: 25px;
      height: 3px;
      background-color: #fff;
      margin: 3px 0;
      transition: 0.3s;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1.5rem;
    align-items: center;

    &.open {
      display: block;
    }
  }

  li {
    display: inline;
  }

  @media (max-width: 768px) {
    .menu-toggle {
      display: flex;
    }

    ul {
      display: ${props => (props.isOpen ? 'block' : 'none')};
      position: absolute;
      top: 60px; /* Adjust based on navbar height */
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.9);
      padding: 1rem;
      text-align: center;
      flex-direction: column;
      gap: 1rem;
    }

    li {
      display: block;
    }
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease, padding 0.3s ease;

  &:hover {
    color: #f39c12; /* Change color on hover */
    transform: translateY(-2px); /* Slightly raise on hover */
    padding-bottom: 2px; /* Add underline effect on hover */
  }

  &.active {
    color: #f39c12; /* Active link color */
    font-weight: bold;
    border-bottom: 2px solid #f39c12; /* Underline for active link */
  }
`;

// Optional Home button styling
const HomeButton = styled(StyledLink)`
  font-size: 1.5rem; /* Larger font for Home button */
  font-weight: 700;
  margin-right: auto; /* Push Home button to the left */

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Adjust font size for smaller screens */
  }
`;
