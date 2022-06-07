import React, { useEffect, useState } from 'react'
import { getCatalogTitle } from '../../actions'
import ContainerSiteSetting from '../ContainerSiteSetting';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import CreateCatalogTitle from '../create/CreateCatalogTitle';
import RenderCatalogTitle from './../render/RenderCatalogTitle';


const CatalogTitle = () => {
    const catalogTitle = useSelector((state) => state.catalogTitle.catalogTitle)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)


    useEffect(() => {
        dispatch(getCatalogTitle())
    }, [])

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <ContainerSiteSetting
            item={catalogTitle}
            limitOne
            setShow={handleShow}
            title={"Заголовок для Каталога"}
        >

            <CreateCatalogTitle
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}

            />
            <RenderCatalogTitle
                setShow={setShow}
                catalogTitle={catalogTitle}
                setCurrentId={setCurrentId}

            />
        </ContainerSiteSetting>
    )
}

export default CatalogTitle
