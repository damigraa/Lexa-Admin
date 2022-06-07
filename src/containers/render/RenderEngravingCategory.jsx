import { Button } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { generatePublicUrl } from '../../urlConfig';
import Loader from './../../components/Loader';
import { deleteEngravingCategory } from '../../actions';

const RenderEngravingCategory = ({ categoryEngraving, setCurrentId, setShow }) => {

    const dispatch = useDispatch()
    
    const Edit = (item) => {
        setCurrentId(item._id)
        setShow(true)
    }

    return (
        <div className="row ">
            {!categoryEngraving ? <Loader /> :
                categoryEngraving.map(item => (
                    <>
                        <div className="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3">
                            <div className="containerProductPage">
                                <NavLink
                                    to={`/engravingLayout/${item.slug}?cid=${item._id}`}
                                    style={{ textDecoration: "none" }}>
                                    <div className="containerProductPage__block">
                                        <div className="containerProductPage__blockImg">
                                            <img src={generatePublicUrl(item.img)} className="containerProductPage__img" alt="foto" />
                                        </div>
                                        <div className="containerProductPage__body text-center">
                                            <h4>
                                                {item.name}
                                            </h4>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div>
                                <Button variant="outlined" color="error"
                                    onClick={() => dispatch(deleteEngravingCategory(item._id))}
                                >
                                    Удалить
                                </Button>
                                <Button variant="outlined"
                                    onClick={() => Edit(item)}
                                >Редактировать</Button>
                            </div>

                        </div>
                    </>
                ))
            }
        </div>
    )
}

export default RenderEngravingCategory
