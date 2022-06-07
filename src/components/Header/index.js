import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../../actions";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CategoryIcon from '@mui/icons-material/Category';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import SettingsIcon from '@mui/icons-material/Settings';
import ImageIcon from '@mui/icons-material/Image';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import CurtainsClosedIcon from '@mui/icons-material/CurtainsClosed';


const Header = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const items = [
    {
      href: "/category",
      text: "Категории",
      icon: <CategoryIcon />
    },
    {
      href: "/blog",
      text: "Блог",
      icon: <CategoryIcon />
    },
    {
      href: "/containerProductPage",
      text: "Продукты",
      icon: <CurtainsClosedIcon />
    },
    {
      href: "/orders",
      text: "Заказы",
      icon: <FilterFramesIcon />
    },
    {
      href: "/image",
      text: "Галерея",
      icon: <ImageIcon />
    },
    {
      href: "/page",
      text: "Страницы",
      icon: <DocumentScannerIcon />
    },
    {
      href: "/applications",
      text: "Заявки",
      icon: <BorderColorIcon />
    },
    {
      href: "/user",
      text: "Пользователи",
      icon: <PersonOutlineIcon />
    },
    {
      href: "/siteSetting",
      text: "Настройки сайта",
      icon: <SettingsIcon />
    },
  ]
  const logout = () => {
    dispatch(signout());
  };

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span className="nav-link" onClick={logout}>
            Выйти
          </span>
        </li>
      </Nav>
    );
  };

  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
        <li className="nav-item">
          <NavLink to="signin" className="nav-link">
            Войти
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="signup" className="nav-link">
            Регестрация
          </NavLink>
        </li>
      </Nav>
    );
  };

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: 1 }}
    >
      <Container fluid>


        <BurgerMenu title="COMPANY" items={items} />


        <Link to="/" className="navbar-brand">
          Настройки сайта
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
