import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPromotions } from '../../actions';
import ContainerSiteSetting from '../ContainerSiteSetting';
import CreatePromotion from '../create/CreatePromotions';
import { RenderPromotion } from './../render/RenderPromotion';

const Promotions = () => {
    const promotion = useSelector((state) => state.promotion.promotion)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(getPromotions())
    }, [])


    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <ContainerSiteSetting
            item={promotion}
            setShow={handleShow}
            title={"Все Акции"}
        >
            <CreatePromotion
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />
            <RenderPromotion
                setShow={setShow}
                promotion={promotion}
                setCurrentId={setCurrentId}
            />
        </ContainerSiteSetting>
    )
}
export default Promotions
