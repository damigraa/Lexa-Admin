import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ContainerSiteSetting from '../ContainerSiteSetting';
import { getChooseMemorialPhotos } from '../../actions/components/chooseMemorialPhotos';
import RenderChooseMemorialPhotos from './../render/ChooseMemorialPhotos';
import AddChooseMemorialPhotos from './../create/ChooseMemorialPhotos';


const ChooseMemorialPhotos = () => {
    const [show, setShow] = useState(false);

    const chooseMemorialPhotos = useSelector((state) => state.chooseMemorialPhotos.chooseMemorialPhotos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getChooseMemorialPhotos())
    }, [])

    const handleShow = () => {
        setShow(true) 
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <ContainerSiteSetting
            item={chooseMemorialPhotos}
            setShow={handleShow}
            title={`Картинка "Как выбрать памятник" `}
        >

            <AddChooseMemorialPhotos
                show={show}
                handleClose={handleClose}
                chooseMemorialPhotos={chooseMemorialPhotos}
            />
            <RenderChooseMemorialPhotos
                chooseMemorialPhotos={chooseMemorialPhotos}
            />
        </ContainerSiteSetting>

    )
}

export default ChooseMemorialPhotos
