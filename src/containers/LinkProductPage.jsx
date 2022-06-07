import React from "react";
import { NavLink } from 'react-router-dom';
import Layout from '../components/Layout/index';
import BackButton from '../siteSetting/components/BackButton';
// import foto from '../assets/stones.jpg'

const ContainerProductPage = () => {


    let prodArray = [
        {
            text: "Летний сезон",
            href: "/products",
            photo: "https://megapolisgroup.spb.ru/templates/yootheme/cache/lis-53cafd64.webp"
        },
        {
            text: "Зимний сезон",
            href: "/standMonument",
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKK0qfdo7IB9DyGnza6iLbuPO3_lbVsBodz07HGx6o5Cytbm8ccp6_QbcTMkkX4CAHE4Y&usqp=CAU"
        },
        // {
        //     text: "Надгробия и Цветники",
        //     href: "/tombstoneCurb",
        //     photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqxZ9icA9goyFEzCcUHDpINTZuRVRY_CEJA&usqp=CAU"
        // },
        // {
        //     text: "Гранитная плитка",
        //     href: "/graniteTiles",
        //     photo: "https://i.otzovik.com/objects/b/1490000/1483430.png"
        // },
        // {
        //     text: "Керамогранит",
        //     href: "/ceramics",
        //     photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33K_bJJE9rx0Vs-C99g0KS-VO76evWtGv_Q&usqp=CAU"
        // },
    ]
    return (
        <Layout sidebar>
            <div>
                <BackButton
                    text="На главную"
                    href="/"
                />
            </div>
            <div className="row ">
                {prodArray.map(item => (
                    <>
                        <div className="col-12 col-sm-6 col-md-6  col-lg-4 col-xl-3">
                            <div className="containerProductPage">
                                <NavLink to={item.href} style={{ textDecoration: "none" }}>
                                    <div className="containerProductPage__block">
                                        <div className="containerProductPage__blockImg">
                                            <img src={item.photo} className="containerProductPage__img" alt="foto" />
                                        </div>
                                        <div className="containerProductPage__body text-center">
                                            <h4>
                                                {item.text}
                                            </h4>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </Layout>
    )
}

export default ContainerProductPage