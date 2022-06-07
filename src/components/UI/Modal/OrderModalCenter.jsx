
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from 'react-redux';
import Loader from "../../Loader";

const OrderModalCenter = (props) => {
    const { details, formatDate, setType, onOrderUpdate } = props
    if (!details) {
        return null
    }

    return (
        <Modal

            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body
                style={{
                    height: "300px"
                }}
            >
                <h4 className="text-center">История заказа</h4>
                <div className="row">
                    <div className="col-5">
                        <ul class="events">
                            {details.orderStatus.map((status) => (
                                <>
                                    <li className="orderStatus">
                                        <div className={`time ${status.isCompleted ? "active" : ""
                                            }`}>{formatDate(status.date)}</div >
                                               <span>{status.type}</span>

                                        <div className={`orderStatus ${status.isCompleted ? "active" : ""}`}>

                                            <div className="status"></div>
                                        </div>
                                    </li>

                                </>
                            ))}

                        </ul>
                    </div>

                    <div className="col 7">
                        <div
                            style={{
                                padding: "0 50px",
                                boxSizing: "border-box",
                            }}
                        >
                            <select onChange={(e) => setType(e.target.value)}>
                                <option value={""}>Выбрать статус</option>
                                {details.orderStatus.map((status) => {
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

                        <div
                            style={{
                                padding: "0 50px",
                                boxSizing: "border-box",
                            }}
                        >
                            <button className="orderHistoryButton" onClick={() => onOrderUpdate(details._id)}>
                                подтвердить
                            </button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрыть</Button>
                <Button onClick={props.onHide}>Внести правки</Button>
            </Modal.Footer>
        </Modal >
    );
}
export default OrderModalCenter