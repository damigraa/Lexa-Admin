import React from 'react'
import Loader from "../../components/Loader"
import { useDispatch } from 'react-redux';
import { deleteManufacture } from '../../actions';
import { generatePublicUrl } from '../../urlConfig';

const RenderManufacture = ({ setShow, setCurrentId, manufacture }) => {
    const dispatch = useDispatch()
    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div className="row">
            {!manufacture ? <Loader /> :
                manufacture.map((item) =>
                    <div className="col-sm-3" key={item._id} style={{ textAlign: "center", height: "220px", paddingTop: "20px", margin: "auto" }}>
                        <img style={{ width: "40px", height: "40px" }} src={generatePublicUrl(item.iconImg)} />
                        <div style={{ margin: "20px" }}>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                        </div>
                        <button className="btn btn-secondary" onClick={() => Edit(item)}>Редактировать</button>
                        <button className="btn btn-secondary" onClick={() => dispatch(deleteManufacture(item._id))}>Удалить</button>
                    </div>

                )}
        </div >
    )
}

export default RenderManufacture