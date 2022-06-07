import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Loader from '../../components/Loader';
import Card from './../../components/UI/Card/index';



export const RenderOrdersTwo = ({ order, formatDate, onOrderUpdate, setType, showOrderModal }) => {


    return (
        <>
            {order.length > 0 ? order.map((orderItem, index) => (
                <Card
                    style={{
                        margin: "10px 0",
                    }}
                    key={index}
                    headerLeft={`Артикул - ${orderItem._id}`}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "50px 50px",
                            alignItems: "center",

                        }}
                    >
                        <div>
                            <div onClick={showOrderModal} className="title">Название</div>
                            {orderItem.items.map((item, index) => (
                                <div className="value" key={index}>
                                    {item.productId.name}
                                </div>
                            ))}
                        </div>
                        <div>
                            <span className="title">Общая сумма</span>
                            <br />
                            <span className="value">{orderItem.totalAmount} руб.</span>
                        </div>
                        <div>
                            <span className="title">Тип Оплаты</span> <br />
                            <span className="value">{orderItem.paymentType}</span>
                        </div>
                        <div>
                            <span className="title">Статус готовности</span> <br />
                            <span className="value">{orderItem.paymentStatus}</span>
                        </div>
                    </div>





                    <div
                        style={{
                            boxSizing: "border-box",
                            padding: "100px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <div className="orderTrack">
                            {orderItem.orderStatus.map((status) => (
                                <div
                                    className={`orderStatus ${status.isCompleted ? "active" : ""
                                        }`}
                                >
                                    <div
                                        className={`point ${status.isCompleted ? "active" : ""}`}
                                    ></div>
                                    <div className="orderInfo">
                                        <div className="status">{status.type}</div>
                                        <div className="date">{formatDate(status.date)}</div>
                                    </div>
                                </div>
                            ))}

                        </div>

                        {/* select input to apply order action */}
                        <div
                            style={{
                                padding: "0 50px",
                                boxSizing: "border-box",
                            }}
                        >
                            <select onChange={(e) => setType(e.target.value)}>
                                <option value={""}>Выбрать статус</option>
                                {orderItem.orderStatus.map((status) => {
                                    return (
                                        <>
                                            {!status.isCompleted ? (
                                                <option key={status.type} value={status.type}>
                                                    {status.type}
                                                </option>
                                            ) : null}
                                        </>
                                    );
                                })}
                            </select>
                        </div>
                        {/* button to confirm action */}

                        <div
                            style={{
                                padding: "0 50px",
                                boxSizing: "border-box",
                            }}
                        >
                            <button onClick={() => onOrderUpdate(orderItem._id)}>
                                подтвердить
                            </button>
                        </div>
                    </div>
                </Card>
            )) : <Loader />}
        </>
    )

}