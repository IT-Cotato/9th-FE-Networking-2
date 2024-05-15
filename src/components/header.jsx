import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';
import { PiHamburgerBold } from 'react-icons/pi';
import { AiOutlineClose } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function Header() {
  const [userClick, setUserClick] = useState(false);

  const menuClick = () => {
    setUserClick(!userClick)
  };
  const xClick = () => {
    setUserClick(false)
  };

  useEffect(() => {
    if (userClick) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [userClick])

  return (
    <>
      <Nav>
        <Col>
          <Link to={`/`}>
            <Logo src="/imgs/potato.png" className="logo" />
          </Link>
        </Col>
        <Col className='menu-list' >
          <Link to={'/about'}>
              <li>About</li>
            </Link>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>Menu 4</li>
        </Col>
        <Col userClick={userClick} >
          <SearchIcon className="search-icon" />
          <HamburgerMenu className='hamburger-icon' onClick={menuClick} />
          <XButton className='x-button' onClick={menuClick} />
        </Col>
      </Nav>
      <SideMenu className='side-menu' userClick={userClick}>
        <MenuList>
          <MenuItem>
            <Link to={'/about'} onClick={xClick} >About</Link>
          </MenuItem>
          <MenuItem>Menu 1</MenuItem>
          <MenuItem>Menu 2</MenuItem>
          <MenuItem>Menu 3</MenuItem>
          <MenuItem>Menu 4</MenuItem>
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
  list-style: none;

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
const MenuList = styled.ul`
  list-style:none;
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
const SideMenu = styled.nav`
  background-color: ${(props) => props.theme.headerTextColor};
  color: ${(props) => props.theme.headerBgColor};

  display: flex;
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
const SearchIcon = styled(IoIosSearch)`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-right: 30px;
`;
const HamburgerMenu = styled(PiHamburgerBold)`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-right: 30px;
  display: none;
  cursor: pointer;
`;
const XButton = styled(AiOutlineClose)`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-right: 30px;
  display: none;
  cursor: pointer;
`;