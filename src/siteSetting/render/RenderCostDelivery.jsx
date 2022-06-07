import React from 'react'
import Loader from "../../components/Loader"
import { useDispatch } from 'react-redux';
import { deleteCostDelivery } from '../../actions';

const RenderCostDelivery = ({ setShow, setCurrentId, costDelivery }) => {
    const dispatch = useDispatch()



    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true) 
    }
    return (
        <div className="row">
            {!costDelivery ? <Loader /> :
                costDelivery.map((item, index) =>
                    <div className="col-sm-3" key={item._id}>
                        <h3 style={{ textAlign: 'center' }}>{index + 1}</h3>
                        <div style={{ margin: "20px" }}>
                            <div><span style={{ color: "#fff" }}></span>{item.city}</div>
                            <div><span style={{ color: "#fff" }}></span>{item.price}</div>
                            <div><span style={{ color: "#fff" }}></span>{item.deliveryTime || "Пусто W"}</div>
                        </div>
                        <div style={{ borderBottom: "2px solid #fff" }}></div>
                        <button className="btn btn-secondary m-2" onClick={() => dispatch(deleteCostDelivery(item._id))}>Удалить</button>
                        <button className="btn btn-secondary  m-2" onClick={() => Edit(item)}>Редактировать</button>
                    </div>

                )}
        </div >
    )
}

export default RenderCostDelivery