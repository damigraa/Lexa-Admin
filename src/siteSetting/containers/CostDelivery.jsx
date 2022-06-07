import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCostDelivery } from '../../actions';
import ContainerSiteSetting from '../ContainerSiteSetting';
import AddCorsDelivery from '../create/AddCostDelivery';
import RenderCostDelivery from './../render/RenderCostDelivery';


const CostDelivery = () => {
    const costDelivery = useSelector((state) => state.costDelivery.costDelivery)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(getCostDelivery())
    }, [])


    const handleShow = () => { 
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <ContainerSiteSetting
            item={costDelivery}
            setShow={handleShow}
            title={"Стоимость доставки"}
        >
            <AddCorsDelivery
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />
            <RenderCostDelivery
                setShow={setShow}
                costDelivery={costDelivery}
                setCurrentId={setCurrentId}
            />
        </ContainerSiteSetting>
    )
}
export default CostDelivery
