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
            modalTitle={"Создать Шапку"}
            onSubmit={submitHeaderForm}
        >
            <Input
                label="Название сайта"
                name={"nameSite"}
                value={formHeader.nameSite}
                placeholder={"Название"}
                onChange={changeHandler}
            />
            <Input
                label="Первый оператор"
                value={formHeader.numberOne}
                placeholder={"Введите название"}
                name={"numberOne"}
                onChange={changeHandler}
            />
            <Input
                label="Номер первого оператора"
                value={formHeader.descriptionOne}
                placeholder={"Введите номер"}
                name={"descriptionOne"}
                onChange={changeHandler}
            />
            <Input
                label="Второй оператор"
                value={formHeader.numberTwo}
                placeholder={"Введите название"}
                name={"numberTwo"}
                onChange={changeHandler}
            />
            <Input
                label="Номер второго оператора"
                value={formHeader.descriptionTwo}
                placeholder={"Введите номер"}
                name={"descriptionTwo"}
                onChange={changeHandler}
            />
            <Input
                label="Почта"
                value={formHeader.mailName}
                placeholder={"Введите название"}
                name={"mailName"}
                onChange={changeHandler}
            />
            <Input
                label="Название почты"
                value={formHeader.mailDescription}
                placeholder={"Введите Email"}
                name={"mailDescription"}
                onChange={changeHandler}
            />
        </Modal>

    )
}


export default CreateHeader