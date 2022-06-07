import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ContainerSiteSetting from '../ContainerSiteSetting';

import { getEngraving } from '../../actions';
import { AddEngraving } from './../create/AddEngraving';
import RenderEngraving from '../render/RenderEngraving';

const Engraving = () => {
    const engraving = useSelector((state) => state.engraving.engraving)
    const [show, setShow] = useState(false);
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getEngraving())
    }, [])

    const handleShow = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }
    return (
        <ContainerSiteSetting
            item={engraving}
            setShow={handleShow}
            title={"Страница Гравировка"}
        >
            <AddEngraving
                show={show}
                handleClose={handleClose}
                setCurrentId={setCurrentId}
                currentId={currentId}
            />
            <RenderEngraving
                engraving={engraving}
                setShow={setShow}
                setCurrentId={setCurrentId}
            />
        </ContainerSiteSetting>

    )
}

export default Engraving
