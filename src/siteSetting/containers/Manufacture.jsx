import React, { useEffect, useState } from 'react'
import { getManufacture } from '../../actions'
import ContainerSiteSetting from './../ContainerSiteSetting';
import { useSelector, useDispatch } from 'react-redux';
import AddManufacture from '../create/AddManufacture';
import RenderManufacture from '../render/RenderManufacture';

const Manufacture = () => {
    const manufacture = useSelector((state) => state.manufacture.manufacture)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)


    useEffect(() => {
        dispatch(getManufacture())
    }, [])

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <ContainerSiteSetting
            item={manufacture}
            setShow={handleShow}
            title={"Мы производители"}
        >
            <AddManufacture
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}

            />
            <RenderManufacture
                setShow={setShow}
                manufacture={manufacture}
                setCurrentId={setCurrentId}

            />
        </ContainerSiteSetting>
    )
}

export default Manufacture

