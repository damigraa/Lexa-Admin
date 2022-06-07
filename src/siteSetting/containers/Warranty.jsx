import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ContainerSiteSetting from '../ContainerSiteSetting';
import AddWarranty from './../create/AddWarranty';
import RenderWarranty from './../render/RenderWarranty';
import { getWarranty } from './../../actions/components/warranty';

function Warranty() {
    const warranty = useSelector((state) => state.warranty.warranty)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        dispatch(getWarranty())
    }, [])

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }


    return (
        <ContainerSiteSetting
            item={warranty}
            setShow={handleShow}
            title={"Гарантии"}
        >
            <RenderWarranty
                setShow={setShow}
                warranty={warranty}
                setCurrentId={setCurrentId}
            />
            <AddWarranty
                show={show}
                handleClose={handleClose}
                setCurrentId={setCurrentId}
                currentId={currentId}

            />
        </ContainerSiteSetting>
    )
}

export default Warranty
