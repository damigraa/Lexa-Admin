import React, { useState } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch } from 'react-redux';
import { addChooseMemorialPhotos } from '../../actions';

const AddChooseMemorialPhotos = ({ show, handleClose }) => {

    const dispatch = useDispatch()

    const [formChooseMemorialPhotos, setFormChooseMemorialPhotos] = useState({
        heading: "",
        title: "",
        description: "",
        // image: "",
    })
    const submitChooseMemorialPhotos = () => {
        const form = new FormData();
        form.append("heading", formChooseMemorialPhotos.heading);
        form.append("title", formChooseMemorialPhotos.title);
        form.append("description", formChooseMemorialPhotos.description);

        dispatch(addChooseMemorialPhotos(formChooseMemorialPhotos)).then(() => handleClose());
    };
    const changeHandler = event => {
        setFormChooseMemorialPhotos({ ...formChooseMemorialPhotos, [event.target.name]: event.target.value })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Как выбрать памятник?"}
            onSubmit={submitChooseMemorialPhotos}
        >
            <Input
                label="Мини-Заголовок"
                value={formChooseMemorialPhotos.heading}
                placeholder={"Введите мини-заголовок"}
                name={"heading"}
                onChange={changeHandler}
            />
            <Input
                label="Основной Заголовок"
                name={"title"}
                value={formChooseMemorialPhotos.title}
                placeholder={"Введите основное заголовок"}
                onChange={changeHandler}
            />
            <Input
                label="Описание"
                name={"description"}
                value={formChooseMemorialPhotos.description}
                placeholder={"Описание"}
                onChange={changeHandler}
            />

        </Modal>

    )
}


export default AddChooseMemorialPhotos