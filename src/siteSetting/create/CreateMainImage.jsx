import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addMainImage, updateMainImage } from '../../actions';


const CreateMainImage = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch()
    const mainImage = useSelector((state) => currentId ? state.mainImage.mainImage.find((MI) => MI._id === currentId) : null)

    const [formMainImage, setFormMainImage] = useState({
        header: "",
        name: "",
        description: "",
        descriptionButton: "",
        image: "",
        buttonText: ""
    })

    useEffect(() => {
        if (mainImage) setFormMainImage(mainImage)
    }, [mainImage])

    const submitMainImageForm = () => {
        if (currentId) {
            dispatch(updateMainImage(currentId, formMainImage))
            handleClose()
            clear()

        } else {
            const form = new FormData()
            form.append("header", formMainImage.header)
            form.append("name", formMainImage.name)
            form.append("description", formMainImage.description)
            form.append("descriptionButton", formMainImage.descriptionButton)
            form.append("image", formMainImage.image)
            form.append("buttonText", formMainImage.buttonText)
            dispatch(addMainImage(form)).then(() => handleClose())
            clear()
        }

    }
    const changeHandler = e => {
        setFormMainImage({ ...formMainImage, [e.target.name]: e.target.value })
    }
    const clear = () => {
        setCurrentId(null)
        setFormMainImage({
            header: "",
            name: "",
            description: "",
            descriptionButton: "",
            image: "",
            buttonText: ""
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить главное изображение"}
            onSubmit={submitMainImageForm}
        >
            <Input
                label="Заголовок"
                value={formMainImage.header}
                placeholder={"Введите заголовок"}
                name={"header"}
                onChange={changeHandler}
            />
            <Input
                label="Название сайта"
                name={"name"}
                value={formMainImage.name}
                placeholder={"Название сайта"}
                onChange={changeHandler}
            />

            <Input
                label="Описание"
                value={formMainImage.description}
                placeholder={"Введите описание"}
                name={"description"}
                onChange={changeHandler}
            />
            <Input
                label="Подробное описание"
                value={formMainImage.descriptionButton}
                placeholder={"Введите подробное описание"}
                name={"descriptionButton"}
                onChange={changeHandler}
            />
            <Input
                label="Кнопка"
                value={formMainImage.buttonText}
                placeholder={"Кнопка"}
                name={"buttonText"}
                onChange={changeHandler}
            />
            <input
                // label="Главное фото"
                // value={formMainImage.image}
                type="file"
                name={"image"}
                onChange={(e) => setFormMainImage({ ...formMainImage, image: e.target.files[0] })}
            />
        </Modal>

    )
}


export default CreateMainImage