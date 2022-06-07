import React from 'react'
import { NavLink } from 'react-router-dom';

export default function BackButtonProduct() {

    return (
        <div>
            <button className="btn btn-secondary">
                <NavLink to="/containerProductPage" style={{ color: "white", textDecoration: "none" }}>Назад</NavLink>
            </button>
        </div>
    )
}
