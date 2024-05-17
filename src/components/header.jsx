import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { PiHamburger } from 'react-icons/pi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [ userClick, setUserClick ] = useState(false);

  const toggleMenu = () => {
    setUserClick(!userClick);
  }

  const closeMenu = () => {
    setUserClick(false);
  }

  useEffect(() => {
    if (userClick) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
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
              <Link to={`/about`}>About</Link>
            </Item>
            <Item>Menu1</Item>
            <Item>Menu2</Item>
            <Item>Menu3</Item>
            <Item>Menu4</Item>
          </Items>
        </Col>
        <Col userClick={userClick}>
          <SearchIcon className="search-icon" />
          <HamburgerMenu className="hamburger-icon" onClick={toggleMenu} />
          <XButton className="x-button" onClick={toggleMenu} />
        </Col>
      </Nav>
      <SideMenu className="side-menu" userClick={userClick}>
        <MenuList>
            <MenuItem>
              <Link to={`/about`}>About</Link>
            </MenuItem>
            <MenuItem>Menu1</MenuItem>
            <MenuItem>Menu2</MenuItem>
            <MenuItem>Menu3</MenuItem>
            <MenuItem>Menu4</MenuItem>
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
    .x-button {
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
  gap: 20px;
`;

const Item = styled.li`
  list-style: none;
`;

const SearchIcon = styled(IoIosSearch)`
  width: 30px;
  height: 30px;
  margin-right: 30px;
`;

const HamburgerMenu = styled(PiHamburger)`
  width: 30px;
  height: 30px;
  margin-right: 30px;
  cursor: pointer;
  display: none; /* 기본적으로 보이지 않음 */

  @media (max-width: 768px) {
    display: ${(props) => (props.userClick ? 'none' : 'block')}; /* 768px 이하일 때만 보임 */
  }

  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
  }
`;

const XButton = styled(AiOutlineClose)`
  width: 30px;
  height: 30px;
  margin-right: 30px;
  cursor: pointer;
  display: none; /* 기본적으로 보이지 않음 */

  @media (max-width: 768px) {
    display: ${(props) => (props.userClick ? 'block' : 'none')}; /* 768px 이하일 때만 보임 */
  }

  @media (max-width: 375px) {
    width: 15px;
    height: 15px;
  }
`;

const SideMenu = styled.nav`
  background-color: ${(props) => props.theme.headerTextColor};
  display: none;
  flex-direction: column;
  position: absolute;
  width: 100%;
  z-index: 99;
  height: 100vh;
  display: none;

  @media (max-width: 768px) {
    &.side-menu {
      display: ${(props) => (props.userClick ? 'block' : 'none')};
    }
  }
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  :hover {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    :hover {
      font-size: 28px;
    }
  }
`;

const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  padding: 10px;
  width: 100%;
  margin: 20px 0px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;