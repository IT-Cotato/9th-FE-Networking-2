import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { PiHamburgerBold } from 'react-icons/pi';
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [userClick, setUserClick] = useState(false);

  function handleClick() {
    setUserClick(!userClick);
  }

  useEffect(() => {
    setUserClick(false);
  }, [])

  return (
    <>
      <Nav>
        <Col>
          <Link to={`/`}>
            <Logo src="/imgs/potato.png" className="logo" />
          </Link>
        </Col>
        <Col className='menu-list'>
          <Items>
            <Item>
              <Link to="about">About</Link>
            </Item>
            <Item>Menu1</Item>
            <Item>Menu2</Item>
            <Item>Menu3</Item>
            <Item>Menu4</Item>
          </Items>
        </Col>
        <Col className='icon-wrapper' userClick={userClick}>
          <SearchIcon className='search-icon'/>
          <HamburgerIcon className='hamburger-icon' onClick={handleClick} />
          <CloseIcon className='x-button' onClick={handleClick} />
        </Col>
      </Nav>
      <SideMenu userClick={userClick}>
        <MenuList>
          <MenuItem>
            <Link to="about" onClick={handleClick}>About</Link>
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
  flex-direction: row;
  gap: 50px;
`;
const Item = styled.li`
  cursor: pointer;
`;

const SearchIcon = styled(IoIosSearch)`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-right: 30px;
  cursor: pointer;
`;

const HamburgerIcon = styled(PiHamburgerBold)`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-right: 30px;
  cursor: pointer;
  display: none;
`;

const CloseIcon = styled(AiOutlineClose)`
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-right: 30px;
  cursor: pointer;
  display: none;
`;

const SideMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.userClick ? 'flex' : ' none')};
    height: calc(100vh - 50px);
    background-color: white;
    justify-content: center;
    font-size: 35px;
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