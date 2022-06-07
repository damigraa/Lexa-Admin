import React, { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import RenderBurgerMenu from './RenderBurgerMenu';
import { signout } from './../../actions/auth.actions';

import ModalConfirm from './ModalConfirm';

const BurgerMenu = ({ title, items }) => {
    const [show, setShow] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    const logout = () => {
        dispatch(signout());
        setShowConfirm(false)
    };

    const rootEl = useRef(null);

    useEffect(() => {
        const onClick = e => rootEl.current.contains(e.target) || setShow(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);


    const handleClose = () => setShowConfirm(false);
    const handleShow = () => setShowConfirm(true);

    return (
        <>
            <ModalConfirm
                title={"Выйти с профиля"}
                show={showConfirm}
                handleClose={handleClose}
                onClick={logout}
            />
            <div className="burgerMenu" ref={rootEl}>
                <div className="burger-btn-container" onClick={() => setShow(!show)} >
                    <div className="burger-btn" fontSize="large" color="#cecece" >
                        <span></span>
                    </div>
                </div>
                <RenderBurgerMenu
                    show={show}
                    user={user}
                    items={items}
                    setShow={setShow}
                    title={title}
                    handleShow={handleShow}
                />

            </div >
        </>
    )
}

export default BurgerMenu
