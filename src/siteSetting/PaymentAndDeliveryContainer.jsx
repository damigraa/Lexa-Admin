import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Layout from './../components/Layout/index';
import BackButton from './components/BackButton';

const PaymentAndDeliveryContainer = () => {


    return (
        <Layout sidebar>
            <div>
                <BackButton />
            </div>
            <li><NavLink to={"/paymentLI"}>Инструкции оплаты</NavLink></li>
            <li><NavLink to={"/costDelivery"}>Cтоимость доставки</NavLink></li>
        </Layout>
    )
}

export default PaymentAndDeliveryContainer
