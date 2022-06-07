import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";

export function Search(props) {
    const dispatch = useDispatch();
    const [searchTimeout, setSearchTimeout] = useState(false);
    const [searchName, setSearchName] = useState("");


    const searchChangeHandler = (e) => {
        setSearchName(e.target.value)
        if (searchTimeout !== false) {
            clearTimeout(searchTimeout)
        }
        // dispatch(showLoader())
        if (e.target.value !== "") {
            setSearchTimeout(setTimeout((value) => {

                dispatch(props.search(value))
            }, 1000, e.target.value))
        } else {
            dispatch(props.get())
        }
    }

    return (
        <>
            <input
                className="disk__search"
                type="text"
                placeholder="Поиск"
                value={searchName}
                onChange={(e) => searchChangeHandler(e)}
            />
        </>
    )
}
export const Sort = (props) => {
    const dispatch = useDispatch();
    const [sort, setSort] = useState("");

    useEffect(() => {
        dispatch(props.get(sort))
    }, [sort])//добавил сорт

    return (
        <>
            <select
                className="disk__select"
                style={{ width: "250px", height: "30px", position: "absolute", right: "100px", color: "black" }}
                value={sort}
                onChange={(e) => setSort(e.target.value)}
            >

                {props.productSort ?
                    <>
                        <option value="name">По названию от А-Я</option>
                        <option value="nameMinus">По названию от Я-А</option>
                        <option value="price">По цене от дорогого к дешевому</option>
                        <option value="priceMinus">По цене от дешевого к дорогому</option>
                        <option value="updatedAtMinus">Самые новые</option>
                        <option value="updatedAt">Самые старые</option>
                    </>
                    :
                    <>
                        <option value="name">По названию от А-Я</option>
                        <option value="nameMinus">По названию от Я-А</option>
                        <option value="email">Email A-Z</option>
                        <option value="emailMinus">Email Z-A</option>
                        <option value="updatedAtMinus">Самые новые</option>
                        <option value="updatedAt">Самые старые</option>
                    </>
                }
            </select>
        </>
    )
}


export const Tabs = (props) => {
    const [appState, setAppState] = useState({
        activeObject: null,
        objects: [{ id: 1, text: "Заказы" }, { id: 2, text: "Выполненые" },]
    });
    const toggleActive = (index) => {
        setAppState({ ...setAppState, activeObject: appState.objects[index] })
    }
    return (
        <div className="tabs">
            <div className="tabs__container">
                <div className="tabs__list">
                    {
                        appState.objects.map((item, index) => (
                            <div
                                className="tabs__item"
                                onClick={() => { toggleActive(index) }}
                                key={index} >
                                <div className='tabs__link' >

                                    {item.text}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}