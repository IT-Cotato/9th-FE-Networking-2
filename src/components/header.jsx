import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { PiHamburgerBold } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [userClick, setUserClick] = useState(false);

  const handleClick = () => setUserClick(!userClick);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setUserClick(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = userClick ? "hidden" : "";
  }, [userClick]);

  return (
    <>
      <Nav>
        <Col>
          <Link to={`/`}>
            <Logo src="/imgs/potato.png" className="logo" />
          </Link>
        </Col>
        <Col className="menu-list">
          <Items>
            <Item>
              <Link to="/about"> About</Link>
            </Item>
            <Item>menu1</Item>
            <Item>menu2</Item>
            <Item>menu3</Item>
            <Item>menu4</Item>
          </Items>
        </Col>
        <Col userClick={userClick}>
          <SearchIcon className="search-icon" />
          <HamburgerIcon className="hamburger-icon" onClick={handleClick} />
          <CloseButton className="close-button" onClick={handleClick} />
        </Col>
      </Nav>
      <SideMenu className="side-menu" userClick={userClick}>
        <MenuList>
          <MenuItem>
            <Link to="/about" onClick={handleClick}>
              About
            </Link>
          </MenuItem>
          <MenuItem>menu1</MenuItem>
          <MenuItem>menu2</MenuItem>
          <MenuItem>menu3</MenuItem>
          <MenuItem>menu4</MenuItem>
        </MenuList>
      </SideMenu>
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
  justify-content: center;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    .search-icon {
      display: none;
    }
    .hamburger-icon {
      display: ${(props) => (props.userClick ? 'none' : 'block')};
    }
    .close-button {
      display: ${(props) => (props.userClick ? 'block' : 'none')};
    }
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

const Items = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const Item = styled.li`
  cursor: pointer;
`;

const SearchIcon = styled(IoIosSearch)`
  width: 30px;
  height: 30px;
  margin-right: 30px;
  cursor: pointer;
`;

const HamburgerIcon = styled(PiHamburgerBold)`
  width: 30px;
  height: 30px;
  margin-right: 30px;
  cursor: pointer;
  display: none;
  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
  }
`;

const CloseButton = styled(AiOutlineClose)`
  width: 30px;
  height: 30px;
  margin-right: 30px;
  cursor: pointer;
  display: none;
  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
  }
`;

const SideMenu = styled.nav`
  display: none;

  @media (max-width: 768px) {
    &.side-menu {
      display: ${(props) => (props.userClick ? "flex" : "none")};
      height: calc(100vh - 50px);
      background-color: white;
      justify-content: center;
      font-size: 35px;
    }
  }
`;
const MenuList = styled.ul``;
const MenuItem = styled.li`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 8vh;
  &:hover {
    font-size: 40px;
  }
`;
