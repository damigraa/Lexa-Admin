import React, { useState, useEffect } from 'react'
import { addWeWorkOnline } from '../../actions';
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateWeWorkOnline } from './../../actions/components/weWorkOnline';

const CreateWeWorkOnline = ({ currentId, setCurrentId, show, handleClose }) => {

    
    const dispatch = useDispatch()
    const weWorkOnline = useSelector((state) => currentId ? state.weWorkOnline.weWorkOnline.find((m) => m._id === currentId) : null)
    const [formWeWorkOnline, setFormWeWorkOnline] = useState({
        title: "",
        description: "",
        buttonText: "",
        buttonHref: "",
        image: ""

    })
    useEffect(() => {
        if (weWorkOnline) setFormWeWorkOnline(weWorkOnline)
    }, [weWorkOnline])

    const submitWeWorkOnlineForm = () => {
        if (currentId) {
            dispatch(updateWeWorkOnline(currentId, formWeWorkOnline))
            handleClose()
            clear()
        } else {
            const form = new FormData()
            form.append("title", formWeWorkOnline.title)
            form.append("description", formWeWorkOnline.description)
            form.append("buttonText", formWeWorkOnline.buttonText)
            form.append("buttonHref", formWeWorkOnline.buttonHref)
            form.append("image", formWeWorkOnline.image)
            dispatch(addWeWorkOnline(form)).then(() => handleClose());
            clear() 
        }

    }
    const changeHandler = event => {
        setFormWeWorkOnline({ ...formWeWorkOnline, [event.target.name]: event.target.value })
    }
    const clear = () => {
        setCurrentId(null)
        setFormWeWorkOnline({
            title: "",
            description: "",
            buttonText: "",
            buttonHref: "",
            image: ""
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить главное изображение"}
            onSubmit={submitWeWorkOnlineForm}
        >
            <Input
                label="Заголовок"
                placeholder={"Введите заголовок"}
                name={"title"}
                value={formWeWorkOnline.title}
                onChange={changeHandler}
            />

            <Input
                label="Описание"
                placeholder={"Описание"}
                value={formWeWorkOnline.description}
                name={"description"}
                onChange={(e) => setFormWeWorkOnline({ ...formWeWorkOnline, description: e.target.value.split(',') })}
            />
            <Input
                label="Текст кнопки"
                placeholder={"Введите текст кнопки"}
                value={formWeWorkOnline.buttonText}
                name={"buttonText"}
                onChange={changeHandler}
            />
            <Input
                label="Ссылка"
                placeholder={"Введите ссылку"}
                value={formWeWorkOnline.buttonHref}
                name={"buttonHref"}
                onChange={changeHandler}
            />
            <input
                type="file"
                name="image"
                onChange={(e) => setFormWeWorkOnline({ ...formWeWorkOnline, image: e.target.files[0] })}
            />
        </Modal>

    )
}


export default CreateWeWorkOnline