import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addCostDelivery, updateCostDelivery } from '../../actions';

const AddCostDelivery = ({ show, handleClose, setCurrentId, currentId }) => {

    const dispatch = useDispatch()
    const costDelivery = useSelector((state) => currentId ? state.costDelivery.costDelivery.find((cors) => cors._id === currentId) : null)

    const [formCostDelivery, setFormCostDelivery] = useState({
        city: "",
        price: "", 
        deliveryTime: ""
    })

    useEffect(() => {
        if (costDelivery) {
            setFormCostDelivery(costDelivery)
        }
    }, [costDelivery])

    const submitCostDelivery = () => {
        if (currentId) {
            dispatch(updateCostDelivery(currentId, formCostDelivery))
            handleClose()
            clear()
        } else {
            const form = new FormData();
            form.append("city", formCostDelivery.city);
            form.append("price", formCostDelivery.price);
            form.append("deliveryTime", formCostDelivery.deliveryTime);
            dispatch(addCostDelivery(formCostDelivery)).then(() => handleClose());
            clear()
        }
    };

    const changeHandler = event => {
        setFormCostDelivery({ ...formCostDelivery, [event.target.name]: event.target.value })
    }

    const clear = () => {
        setCurrentId(null)
        setFormCostDelivery({
            city: "",
            price: ""
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Стоимость доставки в город"}
            onSubmit={submitCostDelivery}
        >
            <Input
                label="Город"
                name={"city"}
                value={formCostDelivery.city}
                placeholder={"Введите заголовок"}
                onChange={changeHandler}
            />
            <Input
                label="Стоимость доставки"
                name={"price"}
                value={formCostDelivery.price}
                placeholder={"Стоимость"}
                onChange={changeHandler}
            />
            <Input
                label="Время доставки"
                name={"deliveryTime"}
                value={formCostDelivery.deliveryTime}
                placeholder={"Сроки доставки"}
                onChange={changeHandler}
            />
        </Modal>

    )
}


export default AddCostDelivery