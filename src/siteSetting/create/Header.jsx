import React, { useState } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch } from 'react-redux';
import { addHeader } from '../../actions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updateHeader } from './../../actions/header';

const CreateHeader = ({ show, handleClose, currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    const header = useSelector((state) => currentId ? state.header.header.find((h) => h._id === currentId) : null)
    const [formHeader, setFormHeader] = useState({
        nameSite: "",
        numberOne: "",
        descriptionOne: "",
        numberTwo: "",
        descriptionTwo: "",
        mailName: "",
        mailDescription: ""
    })
    useEffect(() => {
        if (header) {
            setFormHeader(header)
        }
    }, [header])

    const submitHeaderForm = (e) => {
        if (currentId) {
            e.preventDefault()
            dispatch(updateHeader(currentId, formHeader))
            clear()
            handleClose()
        } else {
            const form = new FormData();
            form.append("nameSite", formHeader.nameSite);
            form.append("numberOne", formHeader.numberOne);
            form.append("descriptionOne", formHeader.descriptionOne);
            form.append("numberTwo", formHeader.numberTwo);
            form.append("descriptionTwo", formHeader.descriptionTwo);
            form.append("mailName", formHeader.mailName);
            form.append("mailDescription", formHeader.mailDescription);
            dispatch(addHeader(formHeader)).then(() => handleClose());
            clear()
        }

    };
    const changeHandler = event => {
        setFormHeader({ ...formHeader, [event.target.name]: event.target.value })
    }
    const clear = () => {
        setCurrentId(null)
        setFormHeader({
            nameSite: '',
            numberOne: '',
            descriptionOne: '',
            numberTwo: '',
            descriptionTwo: '',
            mailName: '',
            mailDescription: '',
        })
    }

    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"?????????????? ??????????"}
            onSubmit={submitHeaderForm}
        >
            <Input
                label="???????????????? ??????????"
                name={"nameSite"}
                value={formHeader.nameSite}
                placeholder={"????????????????"}
                onChange={changeHandler}
            />
            <Input
                label="???????????? ????????????????"
                value={formHeader.numberOne}
                placeholder={"?????????????? ????????????????"}
                name={"numberOne"}
                onChange={changeHandler}
            />
            <Input
                label="?????????? ?????????????? ??????????????????"
                value={formHeader.descriptionOne}
                placeholder={"?????????????? ??????????"}
                name={"descriptionOne"}
                onChange={changeHandler}
            />
            <Input
                label="???????????? ????????????????"
                value={formHeader.numberTwo}
                placeholder={"?????????????? ????????????????"}
                name={"numberTwo"}
                onChange={changeHandler}
            />
            <Input
                label="?????????? ?????????????? ??????????????????"
                value={formHeader.descriptionTwo}
                placeholder={"?????????????? ??????????"}
                name={"descriptionTwo"}
                onChange={changeHandler}
            />
            <Input
                label="??????????"
                value={formHeader.mailName}
                placeholder={"?????????????? ????????????????"}
                name={"mailName"}
                onChange={changeHandler}
            />
            <Input
                label="???????????????? ??????????"
                value={formHeader.mailDescription}
                placeholder={"?????????????? Email"}
                name={"mailDescription"}
                onChange={changeHandler}
            />
        </Modal>

    )
}


export default CreateHeader