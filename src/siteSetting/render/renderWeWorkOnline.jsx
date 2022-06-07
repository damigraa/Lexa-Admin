import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteWeWorkOnline } from '../../actions'
import Loader from "../../components/Loader"
import { generatePublicUrl } from '../../urlConfig'



const RenderWeWorkOnline = ({ weWorkOnline, setCurrentId, setShow }) => {
    const dispatch = useDispatch()


    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    return (
        <div className='text-center'>
            {!weWorkOnline ? <Loader /> :
                weWorkOnline.map((item, index) =>
                    <div key={item.id}>
                        <img src={generatePublicUrl(item.image)} style={{ height: "150px", width: "100px" }} />

                        <div>Этап {index + 1}</div>
                        <div>{item.title || "-------"}</div>
                        <div>{item.description.map((des, index) => <div>{`${index} ${des} `} </div>)}</div>
                        <div>
                            <button className="btn btn-secondary m-1" onClick={() => Edit(item)}>Редактировать</button>
                            <button className="btn btn-secondary m-1" onClick={() => dispatch(deleteWeWorkOnline(item._id))}>Удалить</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default RenderWeWorkOnline