import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { generatePublicUrl } from '../../urlConfig'
import { deleteCeramicsById } from '../../actions';
import Loader from '../../components/Loader';


export const RenderCeramics = ({ setShow, showCeramicsModal, setCurrentId, ceramics }) => {

    const fileView = useSelector(state => state.ceramics.view)

    const dispatch = useDispatch()

    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }



    if (!ceramics) {
        return null
    }
    console.log(ceramics)
    if (fileView === "plate") {
        return (
            <div className="fileplate">
                {!ceramics ? <Loader /> :
                    ceramics.map((item) =>
                        <div className='file-plate' >
                            {<img
                                onClick={() => showCeramicsModal(item)}
                                className="file__img"
                                src={generatePublicUrl(item.ceramicsPictures[0].img) || null}
                                alt={item.name}
                            /> || null}
                            <div className="file-plate__name"
                                style={{ color: '#f1c40f' }}
                            >{item.name}</div>
                            <div className="file__category">{item.category.name} </div>

                            <div className="file-plate__btns">
                                <button className="btn btn-secondary" onClick={() => Edit(item)}>Редактировать</button>
                                <button className="btn btn-secondary" onClick={() => dispatch(deleteCeramicsById(item._id))}>Удалить</button>
                            </div>
                        </div>
                    )}
            </div>
        )
    } else {
        return (
            <div>
                <div className="file-title">
                    <div className="file-title__img">Фото</div>
                    <div className="file-title__name">Название</div>
                    <div className="file-title__date">Категория</div>
                    <div className="file-title__size">Цена</div>
                </div>
                {!ceramics ? <Loader /> :
                    ceramics.map((item) =>

                        <div className="file" key={item._id}>
                            {<img className="file__img"
                                onClick={() => showCeramicsModal(item)}
                                src={generatePublicUrl(item.ceramicsPictures[0].img)}
                                alt={item.name} /> || null}
                            <div className="file__block-name">
                                {console.log(item)}
                                <div className="file__name"
                                    style={{ color: '#f1c40f' }}
                                >
                                    {item.name}
                                </div>

                                <div className="">{"Памятники"}</div>
                            </div>
                            <div className="file__size"
                                style={{ color: '#f1c40f' }}
                            >{item.price} руб.</div>
                            <button className="file__btn file__download" onClick={() => Edit(item)}>Редактировать</button>
                            <button className="file__btn file__delete " onClick={() => dispatch(deleteCeramicsById(item._id))}>Удалить</button>
                        </div>
                    )
                }
            </div>
        )
    }
}
