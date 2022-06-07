import React, { useState, useEffect } from 'react'
import { addPromotion } from '../../actions';
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updatePromotion } from './../../actions/components/promotions';

const CreatePromotion = ({ show, handleClose, currentId, setCurrentId }) => {
    const dispatch = useDispatch()
    const promotion = useSelector((state) => currentId ? state.promotion.promotion.find((p) => p._id === currentId) : null)
    const [formPromotion, setFormPromotion] = useState({
        title: "",
        description: "",
        iconImg: "",

    })

    useEffect(() => {
        if (promotion) {
            setFormPromotion(promotion)
        }
    }, [promotion])

    const submitPromotionForm = (e) => {
        if (currentId) {
            e.preventDefault()
            dispatch(updatePromotion(currentId, formPromotion))
            handleClose()
            clear()
        } else {
            const form = new FormData()
            form.append("title", formPromotion.title)
            form.append("description", formPromotion.description)
            form.append("iconImg", formPromotion.iconImg)
            dispatch(addPromotion(form)).then(() => handleClose());
            clear()
        }

    }
    const clear = () => {
        setCurrentId(null)
        setFormPromotion({
            title: "",
            description: "",
            iconImg: "",
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить новую акцию"}
            onSubmit={submitPromotionForm}
        >
            <Input
                label="Заголовок"
                name={"title"}
                value={formPromotion.title}
                placeholder={"Название"}
                onChange={(e) => setFormPromotion({ ...formPromotion, title: e.target.value })}
            />
            <Input
                label="Описание"
                value={formPromotion.description}
                placeholder={"Введите описание"}
                name={"c"}
                onChange={(e) => setFormPromotion({ ...formPromotion, description: e.target.value })}
            />
            <input
                type="file"
                name="iconImg"
                onChange={(e) => setFormPromotion({ ...formPromotion, iconImg: e.target.files[0] })}
            />
        </Modal>

    )
}


export default CreatePromotion