import React from 'react'
import { useDispatch } from 'react-redux';
import Loader from '../../components/Loader';
import { deleteHeader } from './../../actions/header';

export const RenderHeader = ({ header, setCurrentId, setShow }) => {
    const dispatch = useDispatch()

    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div>
            {!header ? < Loader /> :
                header.map((item) =>
            <div key={item._id}>
                <div style={{ margin: "20px" }}>
                    <h3><span style={{ color: "#fff" }}>Название сайта - </span>{item.nameSite}</h3>
                    <h3><span style={{ color: "#fff" }}>Первый оператор -</span> {item.numberOne}</h3>
                    <h3><span style={{ color: "#fff" }}>Номер - </span>{item.descriptionOne}</h3>
                    <h3><span style={{ color: "#fff" }}>Второй оператор - </span>{item.numberTwo}</h3>
                    <h3><span style={{ color: "#fff" }}>Номер - </span>{item.descriptionTwo}</h3>
                    <h3><span style={{ color: "#fff" }}>Email - </span>{item.mailName}</h3>
                    <h3><span style={{ color: "#fff" }}>Почта - </span>{item.mailDescription}</h3>
                </div>
                <div style={{ borderBottom: "2px solid #fff" }}></div>
                <button className="btn btn-secondary m-2" onClick={() => dispatch(deleteHeader(item._id))}>Удалить</button>
                <button className="btn btn-secondary  m-2" onClick={() => Edit(item)}>Редактировать</button>
            </div>

                )}
        </div>
    )
}
