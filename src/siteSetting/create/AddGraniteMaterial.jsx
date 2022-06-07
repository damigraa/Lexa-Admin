import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addGraniteMaterial, updateGraniteMaterial } from '../../actions';


const AddGraniteMaterial = ({ currentId, setCurrentId, show, handleClose }) => {
    const dispatch = useDispatch()
    const graniteMaterial = useSelector((state) => currentId ? state.graniteMaterial.graniteMaterial.find((m) => m._id === currentId) : null)
    const [formGraniteMaterial, setFormGraniteMaterial] = useState({
        name: "",
        title: "",
        description: "",
        advantage: "", 
        list: "",
        buttonHref: "",
        colorText: "",
        graniteImg: "",
    })
    useEffect(() => {
        if (graniteMaterial) setFormGraniteMaterial(graniteMaterial)
    }, [graniteMaterial])

    const submitGraniteMaterialForm = () => {
        if (currentId) {
            dispatch(updateGraniteMaterial(currentId, formGraniteMaterial))
            handleClose()
            clear()
        } else {
            const form = new FormData()
            form.append("name", formGraniteMaterial.name)
            form.append("title", formGraniteMaterial.title)
            form.append("description", formGraniteMaterial.description)
            form.append("advantage", formGraniteMaterial.advantage)
            form.append("list", formGraniteMaterial.list)
            form.append("buttonHref", formGraniteMaterial.buttonHref)
            form.append("colorText", formGraniteMaterial.colorText)
            form.append("graniteImg", formGraniteMaterial.graniteImg)
            dispatch(addGraniteMaterial(form)).then(() => handleClose())
            clear()
        }

    }
    const clear = () => {
        setCurrentId(null)
        setFormGraniteMaterial({
            name: "",
            title: "",
            description: "",
            advantage: "",
            list: "",
            buttonHref: "",
            colorText: "",
            graniteImg: "",
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={currentId ? "Редактировать материал" : "Добавить материал"}
            onSubmit={submitGraniteMaterialForm}
        >
            <Input
                label="Название"
                value={formGraniteMaterial.name}
                placeholder={"Введите название"}
                name={"name"}
                onChange={(e) => setFormGraniteMaterial({ ...formGraniteMaterial, name: e.target.value })}

            />
            <Input
                label="Заголовок"
                name={"title"}
                value={formGraniteMaterial.title}
                placeholder={"Введите заголовок"}
                onChange={(e) => setFormGraniteMaterial({ ...formGraniteMaterial, title: e.target.value })}

            />
            <Input
                label="Описание"
                name={"description"}
                value={formGraniteMaterial.description}
                placeholder={"Описание"}
                onChange={(e) => setFormGraniteMaterial({ ...formGraniteMaterial, description: e.target.value })}
            />
            <Input
                label="Названия преимущества"
                value={formGraniteMaterial.advantage}
                placeholder={"Введите заголовок преимущества"}
                name={"advantage"}
                onChange={(e) => setFormGraniteMaterial({ ...formGraniteMaterial, advantage: e.target.value })}

            />
            <Input
                label="Список преимущества"
                value={formGraniteMaterial.list}
                placeholder={"Введите преимущества через запятную"}
                name={"list"}
                onChange={(e) => setFormGraniteMaterial({ ...formGraniteMaterial, list: e.target.value.split(',') })}

            />
            <Input
                label="Ссылку для быстрого перехода"
                value={formGraniteMaterial.buttonHref}
                placeholder={"Введите ссылку"}
                name={"buttonHref"}
                onChange={(e) => setFormGraniteMaterial({ ...formGraniteMaterial, buttonHref: e.target.value })}

            />
            <Input
                label="Цвет Камня"
                value={formGraniteMaterial.colorText}
                placeholder={"Введите цвет"}
                name={"colorText"}
                onChange={(e) => setFormGraniteMaterial({ ...formGraniteMaterial, colorText: e.target.value })}

            />
            <input
                type="file"
                name="graniteImg"
                onChange={(e) => setFormGraniteMaterial({ ...formGraniteMaterial, graniteImg: e.target.files[0] })}
            />
        </Modal>

    )
}


export default AddGraniteMaterial