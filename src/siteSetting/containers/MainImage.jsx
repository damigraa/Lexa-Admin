
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getMainImage } from '../../actions';
import ContainerSiteSetting from '../ContainerSiteSetting';
import CreateMainImage from '../create/CreateMainImage'
import { RenderMainImage } from '../render/RenderMainImage';

function MainImage() {
    const mainImage = useSelector((state) => state.mainImage.mainImage)
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)


    useEffect(() => {
        dispatch(getMainImage())
    }, [])


    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }


    return (
        <ContainerSiteSetting
            item={mainImage}
            setShow={handleShow}
            title={"Редактор Главного изображени страницы"}
        >

            <RenderMainImage
                mainImage={mainImage}
                setCurrentId={setCurrentId}
                setShow={setShow}

            />
            <CreateMainImage
                show={show}
                handleClose={handleClose}
                setCurrentId={setCurrentId}
                currentId={currentId}
            />
        </ContainerSiteSetting>
    )
}

export default MainImage

