import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ContainerSiteSetting from './../ContainerSiteSetting';
import { getComeToUs, addComeToUs } from './../../actions/components/comeToUs';
import AddComeToUs from './../create/ComeToUs';
import { RenderComeToUs } from '../render/RenderComeToUs';


const ComeToUs = () => {
    const comeToUs = useSelector((state) => state.comeToUs.comeToUs)
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    useEffect(() => {
        dispatch(getComeToUs())
    }, [])

    const handleShow = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    return (
        <ContainerSiteSetting
            item={comeToUs}
            limitOne
            setShow={handleShow}
            title={`Редактор "Приходи к нам"`}
        >
            <RenderComeToUs
                comeToUs={comeToUs}
                setCurrentId={setCurrentId}
                handleShow={handleShow}
            />
            <AddComeToUs
                show={show}
                handleClose={handleClose}
                comeToUs={comeToUs}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />

        </ContainerSiteSetting>

    )
}

export default ComeToUs
