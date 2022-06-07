import React, { useEffect, useState } from 'react'
import { getPaymentLI } from '../../actions'
import ContainerSiteSetting from '../ContainerSiteSetting';
import { useSelector, useDispatch } from 'react-redux';
import RenderPaymentLI from '../render/RenderPaymentLI';
import AddPaymentList from '../create/AddPaymentList';

const PaymentLI = () => {
    const paymentLI = useSelector((state) => state.paymentLI.paymentLI)
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null)
    const [show, setShow] = useState(false)


    useEffect(() => {
        dispatch(getPaymentLI())
    }, [])

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    }

    return (
        <ContainerSiteSetting
            item={paymentLI}
            setShow={handleShow}
            title={"Инструкция оплаты"}
        >
            <AddPaymentList
                show={show}
                handleClose={handleClose}
                currentId={currentId}
                setCurrentId={setCurrentId}

            />
            <RenderPaymentLI
                setShow={setShow}
                paymentLI={paymentLI}
                setCurrentId={setCurrentId}

            />
        </ContainerSiteSetting>
    )
}

export default PaymentLI
