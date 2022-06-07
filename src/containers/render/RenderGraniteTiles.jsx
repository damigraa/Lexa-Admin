import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { generatePublicUrl } from '../../urlConfig'
import Loader from '../../components/Loader';
import { deleteGraniteTiles } from '../../actions';


export const RenderGraniteTiles = ({ setShow, showGraniteTilesModal, setCurrentId, graniteTiles }) => {

    const fileView = useSelector(state => state.graniteTiles.view)
    const dispatch = useDispatch()

    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }

    if (fileView === "plate") {
        
        return (
            <div className="fileplate">
                {!graniteTiles ? <Loader /> :
                    graniteTiles.map((item) =>
                        <div className='file-plate' >
                            <img
                                onClick={() => showGraniteTilesModal(item)}
                                className="file__img"
                                src={generatePublicUrl(item.img[0].img)}
                                alt={item.name}
                            />
                            <div className="file-plate__name"
                                style={{ color: '#f1c40f' }}
                            >{item.name}</div>
                            <div className="file-plate__btns">
                                <button className="btn btn-secondary" onClick={() => Edit(item)}>Редактировать</button>
                                <button className="btn btn-secondary" onClick={() => dispatch(deleteGraniteTiles(item._id))}>Удалить</button>
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
                    {/* <div className="file-title__date">Категория</div> */}
                    <div className="file-title__size">Цена</div>
                </div>
                {!graniteTiles ? <Loader /> :
                    graniteTiles.map((item) =>
                        <div className="file" key={item._id}>
                            {<img className="file__img"
                                onClick={() => showGraniteTilesModal(item)}
                                src={generatePublicUrl(item.img[0].img)}
                                alt={item.name} />
                                || null}
                            {/* <img src={generatePublicUrl(item.img[0].img)} alt="" /> */}
                            <div className="file__block-name">
                                <div className="file__name"
                                    style={{ color: '#f1c40f' }}
                                >
                                    {item.size}
                                </div>
                                {/* <div className="file__category">{item.category.name}</div> */}
                            </div>
                            {/* <div className="file__date">{item.category.name}</div> */}
                            <div className="file__size"
                                style={{ color: '#f1c40f' }}
                            >{item.price} руб.</div>
                            <button className="file__btn file__download" onClick={() => Edit(item)}>Редактировать</button>
                            <button className="file__btn file__delete " onClick={() => dispatch(deleteGraniteTiles(item._id))}>Удалить</button>
                        </div>
                    )
                }
            </div>
        )
    }
}
