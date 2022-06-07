import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../../actions';

const AddContacts = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch()
    const contacts = useSelector((state) => currentId ? state.contact.contact.find((c) => c._id === currentId) : null)
    const [formContact, setFormContact] = useState({
        title: "",
        description: "",
        iconImg: "",
        href: "",

    })
    useEffect(() => {
        if (contacts) setFormContact(contacts)
    }, [contacts])


    const submitContactForm = (e) => {
        if (currentId) {
            e.preventDefault()
            dispatch(updateContact(currentId, formContact))
            handleClose()
            clear()
        } else {
            const form = new FormData()
            form.append("title", formContact.title)
            form.append("description", formContact.description)
            form.append("iconImg", formContact.iconImg)
            form.append("href", formContact.href)
            dispatch(addContact(form)).then(() => handleClose())
            clear()
        }
    }
    const clear = () => {
        setCurrentId(null)
        setFormContact({
            title: "",
            description: "",
            iconImg: "",
            href: "",
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить пункт"}
            onSubmit={submitContactForm}
        >
            <Input
                label="Заголовок"
                value={formContact.title}
                placeholder={"Введите заголовок"}
                name={"title"}
                onChange={(e) => setFormContact({ ...formContact, title: e.target.value })}
            />
            <Input
                label="Описание"
                value={formContact.description}
                placeholder={"Введите описание"}
                name={"description"}
                onChange={(e) => setFormContact({ ...formContact, description: e.target.value })}
            />
            <Input
                label="Ссылка(не обязательно)"
                value={formContact.href}
                placeholder={"Введите ссылку"}
                name={"href"}
                onChange={(e) => setFormContact({ ...formContact, href: e.target.value })}
            />
            <input
                type="file"
                name="iconImg"
                onChange={(e) => setFormContact({ ...formContact, iconImg: e.target.files[0] })}
            />
        </Modal>

    )
}


export default AddContacts