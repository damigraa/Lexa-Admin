import React from 'react'
import { Container, Row, Col, Table } from "react-bootstrap";
import { generatePublicUrl } from '../../urlConfig';
import Modal from '../../components/UI/Modal/index';


export const DetailsOrder = ({ orderDetailModal, setOrderDetailModal, orderDetails, formatDate }) => {

    if (!orderDetails) {
        return null;
    }

    return (
        <Modal
        className="bg-light text-dark"
            show={orderDetailModal}
            handleClose={() => setOrderDetailModal(false)}
            modalTitle={"История заказа"}
            size="lg"
        >


            <div className="orderInfo">
                <div className="status">{orderDetails.totalAmount}</div>
                <div className="date">{orderDetails.totalAmount}</div>
            </div>
            <div className="row">
                <div className="col-4">
                    {/* {orderDetails.map((orderItem, index) => {
                        {
                            orderItem.orderStatus.map((status) => (
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
                            ))
                        }
                    })} */}
                </div>
                <div className="col-8">


                </div>

            </div>

        </Modal>
    );
}
