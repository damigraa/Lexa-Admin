import React from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { GrGallery } from 'react-icons/all'
const SidebarTwo = (props) => {
    return (
        <>

            <Col md={2} className="sidebarTwo d-block">
                <ul>
                    {/* <li><NavLink exact to={"/"}>Главная</NavLink></li> */}
                    <li>

                        <NavLink to={"/category"}>Категории</NavLink></li>
                    <li>

                        <NavLink to={"/containerProductPage"}>Продукты</NavLink></li>
                    <li>

                        <NavLink to={"/orders"}>Заказы</NavLink></li>
                    <li>

                        <NavLink to={"/orders"}>Заказы</NavLink></li>
                    <li>
                        <GrGallery size="2em" />
                        <NavLink to={"/image"}>Галерея</NavLink></li>
                    <li>

                        <NavLink to={"/page"}>Страницы</NavLink></li>
                    <li>

                        <NavLink to={"/applications"}>Заявки</NavLink></li>
                    <li>

                        <NavLink to={"/users"}>Пользователи</NavLink></li>
                    <li>

                        <NavLink to={"/siteSetting"}>Настройки сайта</NavLink></li>
                    {/* <li><NavLink to={"/test"}>Пробный для тестов</NavLink></li> */}


                </ul>
            </Col>
        </>
    )

}

export default SidebarTwo;