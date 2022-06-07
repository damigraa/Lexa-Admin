import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Accordion from './../Accordion';

const Sidebar = (props) => {
    return (
        <>

            <Col md={2} className="sidebar d-lg-block d-xl-block d-none">
                <ul>
                    <li><NavLink exact to={"/"}>Главная</NavLink></li>
                    <li><NavLink to={"/category"}>Категории</NavLink></li>
                    <li><NavLink to={"/containerProductPage"}>Продукты</NavLink></li>
                    <li><NavLink to={"/blog"}>Блог</NavLink></li>
                    <li><NavLink to={"/orders"}>Заказы</NavLink></li>
                    <li><NavLink to={"/image"}>Галерея</NavLink></li>
                    <li><NavLink to={"/page"}>Страницы</NavLink></li>
                    <li><NavLink to={"/applications"}>Заявки</NavLink></li>
                    <li><NavLink to={"/users"}>Пользователи</NavLink></li>
                    <li><NavLink to={"/siteSetting"}>Настройки сайта</NavLink></li>
                    <li><NavLink to={"/test"}>Пробный для тестов</NavLink></li>


                </ul>
            </Col>
        </>
    )

}

export default Sidebar;