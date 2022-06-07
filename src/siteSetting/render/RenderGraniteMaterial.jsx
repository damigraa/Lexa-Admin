import React from 'react'
import Loader from "../../components/Loader"
import { useDispatch } from 'react-redux';
import { deleteGraniteMaterial } from './../../actions/graniteMaterial';
import { generatePublicUrl } from '../../urlConfig';

const RenderGraniteMaterial = ({ setShow, setCurrentId, graniteMaterial, showMaterialDetailsModal }) => {
    const dispatch = useDispatch()
    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div className="row">
            {!graniteMaterial ? <Loader /> :
                graniteMaterial.map((item) =>
                    <div className="col-sm-6" key={item._id} style={{ textAlign: "center", height: "500px", paddingTop: "20px", margin: "auto", marginTop: "20px" }}>

                        <div style={{ margin: "20px" }}>
                            {/* <div> <h4 style={{ color: "white" }}>Имя</h4> {item.name}</div> */}
                            <img
                                src={generatePublicUrl(item.graniteImg)} style={{ height: "300px", width: "300px" }} />
                            <h3 style={{ color: "white" }}>{item.title}</h3>
                            <button
                                style={{ margin: "5px", }}
                                className="btn btn-warning"
                                onClick={() => Edit(item)}>Редактировать
                            </button>
                            {/* <div> <h4 style={{ color: "white" }}>Описание</h4>{item.description}</div> */}
                            {/* <div><h4 style={{ color: "white" }}>Преимущества список</h4> {item.advantage}</div> */}
                            {/* <div> {item.list.map((item, index) => <div>{`${index}: ${item}`}</div>)}</div> */}
                            {/* <div> <h4 style={{ color: "white" }}>Быстрый переход</h4>{item.buttonHref}</div> */}
                            {/* <div>  <h4 style={{ color: "white" }}>Цвет Камня</h4> {item.colorText}</div> */}
                        </div>
                        <div style={{ textAlign: "center" }}>
                        </div>
                        <button style={{ margin: "5px" }} className="btn btn-secondary" onClick={() => showMaterialDetailsModal(item)}>Подробное</button>

                        <button style={{ margin: "5px" }} className="btn btn-secondary" onClick={() => dispatch(deleteGraniteMaterial(item._id))}>Удалить</button>
                    </div>

                )}
        </div >
    )
}

export default RenderGraniteMaterial

