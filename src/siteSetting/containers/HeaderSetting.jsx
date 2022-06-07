import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addHeader, getHeader } from '../../actions';
import ContainerSiteSetting from './../ContainerSiteSetting';
import CreateHeader from '../create/Header';
import { RenderHeader } from '../render/RenderHeader';

const HeaderSetting = () => {
    const header = useSelector((state) => state.header.header)
    console.log(header);
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [currentId, setCurrentId] = useState(null)

    useEffect(() => {
        dispatch(getHeader())
    }, [currentId, dispatch])


    const handleShow = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }
    return (
        <ContainerSiteSetting
            item={header}
            setShow={handleShow}
            limitOne
            title={"Редактор шапки сайта"}
        >
            <RenderHeader
                setCurrentId={setCurrentId}
                setShow={setShow}
                header={header}
            />
            <CreateHeader
                currentId={currentId}
                setCurrentId={setCurrentId}
                show={show}
                handleClose={handleClose}
            />
        </ContainerSiteSetting>

    )
}

export default HeaderSetting
