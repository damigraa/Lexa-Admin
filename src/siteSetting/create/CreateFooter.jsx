import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addFooter, updateFooter } from '../../actions';


const CreateFooter = ({ show, handleClose, setCurrentId, currentId }) => {
    const dispatch = useDispatch()
    const footer = useSelector((state) => currentId ? state.footer.footer.find((footersImg) => footersImg._id === currentId) : null)

    const [formFooter, setFormFooter] = useState({
        title: "",
        description: "",
        img: ""
    })

    useEffect(() => {
        if (footer) setFormFooter(footer)
    }, [footer])

    const submitFooterForm = () => {
        if (currentId) {
            dispatch(updateFooter(currentId, formFooter))
            handleClose()
            clear()

        } else {
            const form = new FormData()
            form.append("title", formFooter.title)
            form.append("description", formFooter.description)
            form.append("img", formFooter.img)
            dispatch(addFooter(form)).then(() => handleClose())
            clear()
        }

    }
    const changeHandler = e => {
        setFormFooter({ ...formFooter, [e.target.name]: e.target.value })
    }
    const clear = () => {
        setCurrentId(null)
        setFormFooter({
            title: "",
            description: "",
            img: "",
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить изображение подвала"}
            onSubmit={submitFooterForm}
        >
            <Input
                label="Заголовок"
                name={"title"}
                value={formFooter.title}
                placeholder={"Заголовок"}
                onChange={changeHandler}
            />

            <Input
                label="Описание"
                value={formFooter.description}
                placeholder={"Введите описание"}
                name={"description"}
                onChange={changeHandler}
            />

            <input
                type="file"
                name={"image"}
                onChange={(e) => setFormFooter({ ...formFooter, img: e.target.files[0] })}
            />
        </Modal>

    )
}


export default CreateFooter