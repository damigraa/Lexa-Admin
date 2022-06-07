
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getFooter } from '../../actions';
import ContainerSiteSetting from '../ContainerSiteSetting';
import CreateFooter from '../create/CreateFooter'
import { RenderFooter } from '../render/RenderFooter';

function Footer() {
    const footer = useSelector((state) => state.footer.footer)
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)


    useEffect(() => {
        dispatch(getFooter())
    }, [])


    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }


    return (
        <ContainerSiteSetting
            item={footer}
            setShow={handleShow}
            limitOne
            title={"Редактор Фона подвала"}
        >

            <RenderFooter
                footer={footer}
                setCurrentId={setCurrentId}
                setShow={setShow}

            />
            <CreateFooter
                show={show}
                handleClose={handleClose}
                setCurrentId={setCurrentId}
                currentId={currentId}
            />
        </ContainerSiteSetting>
    )
}

export default Footer

