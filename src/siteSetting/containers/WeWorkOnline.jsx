import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ContainerSiteSetting from '../ContainerSiteSetting';
import CreateWeWorkOnline from '../create/CreateWeWorkOnline';
import { getWeWorkOnline } from './../../actions/components/weWorkOnline';
import RenderWeWorkOnline from '../render/renderWeWorkOnline';

const WeWorkOnline = () => {
    const weWorkOnline = useSelector((state) => state.weWorkOnline.weWorkOnline)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)

    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(getWeWorkOnline())
    }, [])



    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }


    return (
        <ContainerSiteSetting
            item={weWorkOnline}
            setShow={handleShow}
            limitOne
            title={"Работаем онлайн"}
        >
            <CreateWeWorkOnline
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />
            <RenderWeWorkOnline
                setShow={setShow}
                weWorkOnline={weWorkOnline}
                setCurrentId={setCurrentId}
            />
        </ContainerSiteSetting>
    )
}
export default WeWorkOnline
