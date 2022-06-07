import React, { useState } from 'react'
import Card from './../../components/UI/Card/index';
import foto from './f19.jpg'
import fotoTwo from './20.jpg'
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import RenderProductOrder from './RenderProductOrder';


export const RenderOrders = ({ order, showOrderModal, orderProduct, newArrayProd }) => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };


    return (
        <>

            <div>
                {order.map((orderItem, index) => {
                    return (
                        <>
                            <Card
                                onClick={() => { toggle(index) }}
                                style={{
                                    margin: "10px 0",
                                }}
                                key={index}
                            >
                                <div
                                    onClick={() => orderProduct(orderItem)}
                                    className="order row m-1 p-2 ">
                                    <div className="col-sm-4">
                                        <div className="order__start">
                                            <div className="order__heading ">
                                            </div>
                                            <div className="order__leftContainer">
                                                <span className="title">{` № ${index}`} от {orderItem.createdAt.slice(0, 10)}</span>
                                                <div className="value">{orderItem.paymentStatus}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="title">
                                            Cумма заказа
                                        </div>
                                        <span className="value">{orderItem.totalAmount} руб.</span>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="order__rightContainer">
                                            <div className='row text-right'>
                                                <div className="order__imgContainer">
                                                    <div className='order__img '>
                                                        <img className='order__i ' src={foto} alt="foto" />
                                                    </div>
                                                    <div className='order__img '>
                                                        <img className='order__i ' src={fotoTwo} alt="foto" />
                                                    </div>
                                                </div>
                                                <div className='order-iconContainer'>
                                                    <span>{clicked === index
                                                        ? <BsChevronDown size='20px' color='#3e77aa' />
                                                        : <BsChevronUp size='20px' color="#3e77aa" />}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {clicked === index ? (
                                    <div className='container'>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <p>Информация о заказе</p>
                                                <div className="m-2 p-1">
                                                    <div>График Работы</div>
                                                    <div> Пн-Сб: 10:00-21:00</div>
                                                    <div>Вс: 10:00-18:00</div>
                                                </div>
                                                <div className="m-2 p-1">
                                                    <div> Маслак Роман Сергеевич</div>
                                                    <div> +79537513915 </div>
                                                    <div> +380987653421 </div>
                                                </div>
                                                <div className="m-2 p-1" onClick={e => e.stopPropagation()}>
                                                    <div className="orderHistoryButton" onClick={() => showOrderModal(orderItem)}>История заказа</div>
                                                </div>
                                                <span className="title">{` № ${index}`} от {orderItem.createdAt.slice(0, 10)}</span>
                                                <span className="value">{orderItem.totalAmount} руб.</span>
                                            </div>
                                            <div className="col-sm-8">
                                                <span className="title">Товары Нашего производства</span>
                                                {orderItem.length ? orderItem.map((item) => {
                                                    console.log("orderItem", orderItem)
                                                    return (
                                                        <>
                                                            <RenderProductOrder
                                                                orderItem={orderItem}
                                                                orderProduct={orderProduct}
                                                                item={item}
                                                            />
                                                        </>
                                                    )

                                                }) : null}
                                            </div>


                                        </div>
                                    </div>
                                ) : null}
                            </Card>
                        </>
                    );
                })}
            </div>
        </>
    )
}





