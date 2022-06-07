import React, { useState, useEffect } from 'react'
import Input from '../../components/UI/Input/index';
import Modal from '../../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addPaymentLI, updatePayloadLI } from '../../actions';

const AddPaymentList = ({ currentId, setCurrentId, show, handleClose }) => {
    const dispatch = useDispatch()

    const paymentLI = useSelector((state) => currentId ? state.paymentLI.paymentLI.find((p) => p._id === currentId) : null)
    const [formPaymentList, setFormPaymentList] = useState({
        text: ""

    })
    useEffect(() => {
        if (paymentLI) {
            setFormPaymentList(paymentLI)
        }
    }, [paymentLI])

    const submitPaymentListForm = () => {
        if (currentId) {
            dispatch(updatePayloadLI(currentId, formPaymentList))
            handleClose()
            clear()
        } else {
            const form = new FormData()
            form.append("text", formPaymentList.text)
            dispatch(addPaymentLI(formPaymentList)).then(() => handleClose())
            clear()
        }

    }
    const clear = () => {
        setCurrentId(null)
        setFormPaymentList({
            text: ""
        })
    }
    return (
        <Modal
            show={show}
            handleClose={handleClose}
            modalTitle={"Добавить пункт"}
            onSubmit={submitPaymentListForm}
        >
            <Input
                label="Заголовок"
                value={formPaymentList.text}
                placeholder={"Введите текст"}
                name={"text"}
                onChange={(e) => setFormPaymentList({ ...formPaymentList, text: e.target.value })}

            />
        </Modal>

    )
}


export default AddPaymentList