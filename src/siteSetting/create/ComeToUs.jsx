import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addComeToUs } from '../../actions';
import { updateComeToUs } from './../../actions/components/comeToUs';

const AddComeToUs = ({ show, handleClose, currentId, setCurrentId }) => {
    const comeToUs = useSelector((state) => currentId ? state.comeToUs.comeToUs.find((c) => c._id === currentId) : null)

    const dispatch = useDispatch()

    const [formComeToUs, setFormComeToUs] = useState({
        heading: "",
        description: ""
    })

    useEffect(() => {
        if (comeToUs) setFormComeToUs(comeToUs)
    }, [comeToUs])


    const submitComeToUsForm = () => {
        if (currentId) {
            dispatch(updateComeToUs(currentId, formComeToUs))
            handleClose()
            clear()
        } else {
            const form = new FormData();
            form.append("nameSite", formComeToUs.heading);
            form.append("numberOne", formComeToUs.description);

            dispatch(addComeToUs(formComeToUs)).then(() => handleClose());
            clear()
        }

    };


    const changeHandler = event => {
        setFormComeToUs({ ...formComeToUs, [event.target.name]: event.target.value })
    }

    const clear = () => {
        setCurrentId(null)
        setFormComeToUs({
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
            modalTitle={"ComeToUs"}
            onSubmit={submitComeToUsForm}
        >
            <Input
                label="Заголовок"
                value={formComeToUs.heading}
                placeholder={"Введите заголовок"}
                name={"heading"}
                onChange={changeHandler}
            />
            <Input
                label="Описание"
                name={"description"}
                value={formComeToUs.description}
                placeholder={"Описание"}
                onChange={changeHandler}
            />
        </Modal>

    )
}


export default AddComeToUs