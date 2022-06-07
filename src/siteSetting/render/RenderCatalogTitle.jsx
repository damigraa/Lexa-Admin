import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteCatalogTitle, deleteWeWorkOnline } from '../../actions'
import Loader from "../../components/Loader"



const RenderCatalogTitle = ({ catalogTitle, setCurrentId, setShow }) => {
    const dispatch = useDispatch()


    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div className="row">
            {!catalogTitle ? <Loader /> :
                catalogTitle.map((item) =>
                    <div className="col-sm-3" key={item._id}
                        style={{ textAlign: "center", height: "220px", paddingTop: "20px", margin: "auto" }}>
                        <div style={{ margin: "20px" }}>
                            <div>{item.title}</div>
                            <div>{item.description}</div>
                        </div>
                        <div>
                            <button className="btn btn-secondary m-1" onClick={() => Edit(item)}>Редактировать</button>
                            <button className="btn btn-secondary m-1" onClick={() => dispatch(deleteCatalogTitle(item._id))}>Удалить</button>
                        </div>
                    </div>
                )
            }
        </div>


    )
}

export default RenderCatalogTitle