import React from 'react'
import Loader from "../../components/Loader"
import { useDispatch } from 'react-redux';
import { deletePayloadLI } from '../../actions';

const RenderPaymentLI = ({ setShow, setCurrentId, paymentLI }) => {
    const dispatch = useDispatch()
    console.log(paymentLI)
    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div className="row">
            {!paymentLI ? <Loader /> :
                paymentLI.map((item, index) =>
                    <div  className="col-sm-3" key={item._id}>
                        <h3 style={{textAlign: 'center'}}>{index + 1}</h3>
                        <div style={{ margin: "20px" }}>
                            <div><span style={{ color: "#fff" }}>Текст </span>{item.text}</div>
                        </div>
                        <div style={{ borderBottom: "2px solid #fff" }}></div>
                        <button className="btn btn-secondary m-2" onClick={() => dispatch(deletePayloadLI(item._id))}>Удалить</button>
                        <button className="btn btn-secondary  m-2" onClick={() => Edit(item)}>Редактировать</button>
                    </div>

                )}
        </div >
    )
}

export default RenderPaymentLI