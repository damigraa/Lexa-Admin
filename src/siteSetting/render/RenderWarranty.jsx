import React from 'react'
import Loader from "../../components/Loader"
import { useDispatch } from 'react-redux';
import { deleteWarranty } from '../../actions';
import { generatePublicUrl } from '../../urlConfig';

const RenderWarranty = ({ setShow, setCurrentId, warranty }) => {
    const dispatch = useDispatch()
    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div className="row">
            {!warranty ? <Loader /> :
                warranty.map((item) =>
                    <div className="col-sm-4" key={item._id} style={{ textAlign: "center", height: "300px", paddingTop: "20px", margin: "auto" }}>
                        <img src={generatePublicUrl(item.iconImg)} style={{ height: "150px", width: "100px" }} />
                        <div style={{ margin: "20px" }}>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                        </div>
                        <button className="btn btn-secondary" onClick={() => Edit(item)}>Редактировать</button>
                        <button className="btn btn-secondary" onClick={() => dispatch(deleteWarranty(item._id))}>Удалить</button>
                    </div>

                )}
        </div >
    )
}

export default RenderWarranty