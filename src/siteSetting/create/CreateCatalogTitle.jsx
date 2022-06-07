import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addCatalogTitle, updateCatalogTitle } from '../../actions';

const CreateCatalogTitle = ({ show, handleClose, setCurrentId, currentId }) => {

    const dispatch = useDispatch()
    const catalogTitle = useSelector((state) => currentId ? state.catalogTitle.catalogTitle.find((m) => m._id === currentId) : null)

    const [formCatalogTitle, setFormCatalogTitle] = useState({
        title: "",
        description: "",
    })

    useEffect(() => {
        if (catalogTitle) {
            setFormCatalogTitle(catalogTitle)
        }
    }, [catalogTitle])
    const submitCatalogTitle = () => {
        if (currentId) {
            dispatch(updateCatalogTitle(currentId, formCatalogTitle))
            handleClose()
            clear()
        } else {
            const form = new FormData();
            form.append("title", formCatalogTitle.title);
            form.append("description", formCatalogTitle.description);
            dispatch(addCatalogTitle(formCatalogTitle)).then(() => handleClose());
            clear()
        }
    };

    const changeHandler = event => {
        setFormCatalogTitle({ ...formCatalogTitle, [event.target.name]: event.target.value })
    }

    const clear = () => {
        setCurrentId(null)
        setFormCatalogTitle({
            title: "",
            description: ""
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Заголовок для каталога"}
            onSubmit={submitCatalogTitle}
        >
            <Input
                label="Заголовок"
                name={"title"}
                value={formCatalogTitle.title}
                placeholder={"Введите заголовок"}
                onChange={changeHandler}
            />
            <Input
                label="Описание"
                name={"description"}
                value={formCatalogTitle.description}
                placeholder={"Описание"}
                onChange={changeHandler}
            />

        </Modal>

    )
}


export default CreateCatalogTitle