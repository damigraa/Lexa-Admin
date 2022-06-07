import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ContainerSiteSetting from './../ContainerSiteSetting';
import { getContacts } from './../../actions/components/contact';
import AddContacts from '../create/AddContacts';
import { RenderContacts } from '../render/RenderContacts';

function Contacts() {
    const contact = useSelector((state) => state.contact.contact)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)

    useEffect(() => {
        dispatch(getContacts())
    }, [])

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }
    return (
        <ContainerSiteSetting
            item={contact}
            setShow={handleShow}
            title={"Связаться с нами"}
        >
            <AddContacts
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />
            <RenderContacts
                setShow={setShow}
                contact={contact}
                setCurrentId={setCurrentId}
            />
        </ContainerSiteSetting>
    )
}

export default Contacts
