import React from 'react'
import { deleteContact } from '../../actions';
import Loader from '../../components/Loader';
import { useDispatch } from 'react-redux';
import { generatePublicUrl } from '../../urlConfig';

export const RenderContacts = ({ contact, setCurrentId, setShow }) => {
    const dispatch = useDispatch()

    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div className="row">
            {!contact ? <Loader /> :
                contact.map((item, index) =>
                    <div className="col-уsm-3" key={item._id} style={{ textAlign: "center", height: "220px", paddingTop: "20px", margin: "auto" }}>
                        <img style={{
                            width: "40px",
                            height: "40px"
                        }}
                            src={generatePublicUrl(item.iconImg) ||
                                <div style={{
                                    height: "0px",
                                    width: "50px",
                                    background: "black",
                                    margin: "0 auto"
                                }}>
                                </div>} />
                        <div>{item.title || null}</div>
                        <div>{item.description || null}</div>
                        <p>{item.href || null}</p>
                        <button className="btn btn-secondary" onClick={() => Edit(item)}>Редактировать</button>
                        <button className="btn btn-secondary" onClick={() => dispatch(deleteContact(item._id))}>Удалить</button>
                    </div>
                )}
        </div>
    )
}
