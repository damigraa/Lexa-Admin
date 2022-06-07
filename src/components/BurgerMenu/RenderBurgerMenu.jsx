import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const RenderBurgerMenu = ({ items, user, show, setShow, title, handleShow }) => {


    return (

        <div
            className={show ? "burgerMenu__dropdown active" : "burgerMenu__dropdown"}
            onClick={e => e.stopPropagation()}
        >

            <div className="burgerMenu__header-container">
                <div className="burgerMenu__close-icon-container">
                    <div className="burgerMenu__close-icon" onClick={() => { setShow(false) }}>
                        <IoMdClose />
                    </div>
                </div>
                <div className="burgerMenu__title">
                    {title}
                </div>
                <div className="burgerMenu__user">
                    <NavLink to="/cabinet">
                        <div className="burgerMenu__user-content">
                            <div className="burgerMenu__user-icon">
                                {user.firstName.charAt(0)}
                            </div>
                            <div>
                                <div >{user.firstName} {user.lastName}</div>
                                <span>{user.email}</span>
                            </div>

                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="burgerMenu__container">

                <div>
                    {items.map((item, index) =>

                        <NavLink key={index} className="burgerMenu__content"
                            to={item.href}>
                            <div className="burgerMenu__icon">
                                {item.icon}
                            </div>
                            {item.text}</NavLink>
                    )}
                </div>
            </div>
            <div className="burgerMenu-footer">
                <div className="burgerMenu__content button" onClick={handleShow}>
                    Выйти с аккаунта
                </div>
            </div>

        </div >
    )
}

export default RenderBurgerMenu
