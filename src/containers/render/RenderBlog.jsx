import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { generatePublicUrl } from '../../urlConfig'
import Loader from '../../components/Loader';
import { deleteBlog } from '../../actions';


export const RenderBlog = ({ setShow, showBlogDetailsModal, setCurrentId, blog }) => {

    const fileView = useSelector(state => state.blog.view)

    const dispatch = useDispatch()
    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }
    console.log(blog)

    if (fileView === "plate") {
        return (
            <div className="fileplate">
                {!blog ? <Loader /> :
                    blog.map((item) =>
                        <div className='file-plate' >
                            <img
                                onClick={() => showBlogDetailsModal(item)}
                                className="file__img"
                                src={generatePublicUrl(item.images[0].img)}
                                alt={item.name}
                            />
                            <div className="file-plate__name"
                                style={{ color: '#f1c40f' }}
                            >{item.title}</div>
                            <div className="file-plate__btns">
                                <button className="btn btn-secondary" onClick={() => Edit(item)}>Редактировать</button>
                                <button className="btn btn-secondary" onClick={() => dispatch(deleteBlog(item._id))}>Удалить</button>
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
                    <div className="file-title__name">Заголовок</div>
                    {/* <div className="file-title__date">Категория</div> */}
                    <div className="file-title__size">Дата</div>
                </div>
                {!blog ? <Loader /> :
                    blog.map((item) =>
                        <div className="file" key={item._id}>
                            <img className="file__img"
                                onClick={() => showBlogDetailsModal(item)}
                                src={generatePublicUrl(item.images[0].img)}
                                alt={item.title} />

                            {/* <img src={generatePublicUrl(item.img[0].img)} alt="" /> */}
                            <div className="file__block-name">
                                <div className="file__name"
                                    style={{ color: '#f1c40f' }}
                                >
                                    {item.title}
                                </div>
                                {/* <div className="file__category">{item.category.name}</div> */}
                            </div>
                            {/* <div className="file__date">{item.category.name}</div> */}
                            <div className="file__size"
                                style={{ color: '#f1c40f' }}
                            >{item.createdAt.slice(0, 10)} </div>
                            <button className="file__btn file__download" onClick={() => Edit(item)}>Редактировать</button>
                            <button className="file__btn file__delete " onClick={() => dispatch(deleteBlog(item._id))}>Удалить</button>
                        </div>
                    )
                }
            </div>
        )
    }
}
