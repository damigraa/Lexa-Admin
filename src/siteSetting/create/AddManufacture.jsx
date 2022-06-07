import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addManufacture } from '../../actions';
import { updateManufacture } from '../../actions/components/manufacture';

const AddManufacture = ({ currentId, setCurrentId, show, handleClose }) => {
    const dispatch = useDispatch()
    const manufacture = useSelector((state) => currentId ? state.manufacture.manufacture.find((m) => m._id === currentId) : null)
    const [formManufacture, setFormManufacture] = useState({
        title: "",
        description: "",
        iconImg: ""
    })
    useEffect(() => {
        if (manufacture) setFormManufacture(manufacture)
    }, [manufacture])

    const submitManufactureForm = () => {
        if (currentId) {
            dispatch(updateManufacture(currentId, formManufacture))
            handleClose()
            clear()
        } else {
            const form = new FormData()
            form.append("title", formManufacture.title)
            form.append("description", formManufacture.description)
            form.append("iconImg", formManufacture.iconImg)
            dispatch(addManufacture(form)).then(() => handleClose())
            clear()
        }

    }
    const clear = () => {
        setCurrentId(null)
        setFormManufacture({
            title: "",
            description: "",
            iconImg: ""
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить главное изображение"}
            onSubmit={submitManufactureForm}
        >
            <Input
                label="Заголовок"
                value={formManufacture.title}
                placeholder={"Введите заголовок"}
                name={"title"}
                onChange={(e) => setFormManufacture({ ...formManufacture, title: e.target.value })}

            />
            <Input
                label="Описание"
                name={"description"}
                value={formManufacture.description}
                placeholder={"Описание"}
                onChange={(e) => setFormManufacture({ ...formManufacture, description: e.target.value })}
            />
            <input
                type="file"
                name="iconImg"
                onChange={(e) => setFormManufacture({ ...formManufacture, iconImg: e.target.files[0] })}
            />
        </Modal>

    )
}


export default AddManufacture