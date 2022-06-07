import React, { useEffect, useState } from 'react'
import ContainerSiteSetting from '../ContainerSiteSetting';
import { useSelector, useDispatch } from 'react-redux';
import AddGraniteMaterial from './../create/AddGraniteMaterial';
import RenderGraniteMaterial from './../render/RenderGraniteMaterial';
import { getGraniteMaterial } from './../../actions/graniteMaterial';
import { DetailsGraniteMaterial } from './../details/DetailsGraniteMaterial';

const GraniteMaterial = () => {
    const graniteMaterial = useSelector((state) => state.graniteMaterial.graniteMaterial)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [materialDetailModal, setMaterialDetailModal] = useState(false);
    const [materialDetails, setMaterialDetails] = useState(null);
    const [show, setShow] = useState(false)


    useEffect(() => {
        dispatch(getGraniteMaterial())
    }, [])

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    const showMaterialDetailsModal = (material) => {
        setMaterialDetails(material);
        setMaterialDetailModal(true);
    };

    return (
        <ContainerSiteSetting
            item={graniteMaterial}
            setShow={handleShow}
            title={"Материалы"}
        >
            <AddGraniteMaterial
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}
 
            />
            <RenderGraniteMaterial
                showMaterialDetailsModal={showMaterialDetailsModal}
                setShow={setShow}
                graniteMaterial={graniteMaterial}
                setCurrentId={setCurrentId}

            />
            <DetailsGraniteMaterial
                materialDetailModal={materialDetailModal}
                materialDetails={materialDetails}
                setMaterialDetailModal={setMaterialDetailModal}
            />
        </ContainerSiteSetting>
    )
}

export default GraniteMaterial
