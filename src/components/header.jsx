import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [userClick, setUserClick] = useState(false);
  const onClick = () => {
    setUserClick((current) => !current);
  };
  const handleLinkClick = () => {
    setUserClick((current) => {
      if (current) !current;
      else current;
    });
  };
  return (
    <>
      <Nav>
        <Col>
          <Link to={`/`}>
            <Logo src="/imgs/potato.png" className="logo" />
          </Link>
        </Col>
        <Col className="menu-list">
          <Link to={"/about"}>
            <Menu>about</Menu>
          </Link>
          <Menu>menu1</Menu>
          <Menu>menu2</Menu>
          <Menu>menu3</Menu>
          <Menu>menu4</Menu>
        </Col>

        <Col>
          <Col className="search-icon">search</Col>
          {!userClick ? (
            <Col as="button" className="hamburger-icon" onClick={onClick}>
              openMenu
            </Col>
          ) : (
            <Col as="button" className="x-button" onClick={onClick}>
              x
            </Col>
          )}
        </Col>
      </Nav>
      {userClick ? (
        <Col className="side-menu">
          <Link to={"/about"} onClick={handleLinkClick}>
            <Menu>about</Menu>
          </Link>
          <Menu>menu1</Menu>
          <Menu>menu2</Menu>
          <Menu>menu3</Menu>
          <Menu>menu4</Menu>
        </Col>
      ) : null}
    </>
  );
}

const Nav = styled.div`
  background-color: ${(props) => props.theme.headerBgColor};
  color: ${(props) => props.theme.headerTextColor};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    .menu-list {
      display: none;
    }
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;

  .search-icon {
    margin-right: 50px;
    display: block;
  }
  .hamburger-icon {
    display: none;
  }
  .x-button {
    display: none;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;

    .search-icon {
      display: none;
    }
    .hamburger-icon,
    .x-button {
      border: 0;
      background-color: ${(props) => props.theme.headerBgColor};
      color: ${(props) => props.theme.headerTextColor};
      display: block;
      margin-right: 30px;

      &:hover {
        transition: 0.2s;
        scale: 1.2;
      }
    }

    &.side-menu {
      position: absolute;
      width: 100%;
      height: 350px;
      background-color: #c8c8c8f7;
      z-index: 1;
      border-bottom: 1px solid black;
    }
  }
`;

const Menu = styled.div`
  &:hover {
    transition: 0.2s;
    scale: 1.2;
  }
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-left: 30px;
  cursor: pointer;

  @media (max-width: 375px) {
    width: 35px;
    height: 35px;
    margin-left: 20px;
  }
`;
