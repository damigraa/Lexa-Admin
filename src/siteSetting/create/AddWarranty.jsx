import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addWarranty, updateWarranty } from '../../actions';


const AddWarranty = ({ currentId, setCurrentId, show, handleClose }) => {
    const dispatch = useDispatch()
    const warranty = useSelector((state) => currentId ? state.warranty.warranty.find((m) => m._id === currentId) : null)
    const [formWarranty, setFormWarranty] = useState({
        title: "",
        description: "",
        iconImg: ""
    })

    useEffect(() => {
        if (warranty) setFormWarranty(warranty)
    }, [warranty])

    const submitWarrantyForm = () => {
        if (currentId) {
            dispatch(updateWarranty(currentId, formWarranty))
            handleClose()
            clear()
        } else {
            const form = new FormData()
            form.append("title", formWarranty.title)
            form.append("description", formWarranty.description)
            form.append("iconImg", formWarranty.iconImg)
            dispatch(addWarranty(form)).then(() => handleClose())
            clear()
        }

    }
    const clear = () => {
        setCurrentId(null)
        setFormWarranty({
            title: "",
            description: "",
            iconImg: ""
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={currentId ? "Редактировать гарантию" : "Добавить гарантию"}
            onSubmit={submitWarrantyForm}
        >

            <Input
                label="Заголовок"
                name={"title"}
                value={formWarranty.title}
                placeholder={"Введите заголовок"}
                onChange={(e) => setFormWarranty({ ...formWarranty, title: e.target.value })}

            />
            <Input
                label="Подробнее"
                value={formWarranty.description}
                placeholder={"Введите описание"}
                name={"description"}
                onChange={(e) => setFormWarranty({ ...formWarranty, description: e.target.value })}

            />
            <input
                type="file"
                name="graniteImg"
                onChange={(e) => setFormWarranty({ ...formWarranty, iconImg: e.target.files[0] })}
            />
        </Modal>

    )
}


export default AddWarranty

