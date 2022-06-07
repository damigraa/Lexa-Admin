import React from 'react'
import Layout from './../components/Layout/index';
import { NavLink } from 'react-router-dom';

const SiteSetting = () => {
    return (
        <Layout sidebar>
            <h2>Выберите что нужно изменить</h2>
            <ul className="siteSetting">
                <li><NavLink to={"/headerSetting"}>Изменить шапку</NavLink></li>
                <li><NavLink to={"/promotionsSetting"}>Добавить Акции</NavLink></li>
                <li><NavLink to={"/mainImageSetting"}>Изображение главной страницы </NavLink></li>
                <li><NavLink to={"/manufactureSetting"}>Мы производители </NavLink></li>
                <li><NavLink to={"/comeToUsSetting"}>Приходи к нам </NavLink></li>
                <li><NavLink to={"/weWorkOnline"}>Работаем онлайн</NavLink></li>
                <li><NavLink to={"/chooseMemorialPhotos"}>Как выбрать памятник Изображения</NavLink></li>
                <li><NavLink to={"/engraving"}>Гравировка</NavLink></li>
                <li><NavLink to={"/contact"}>Контакты</NavLink></li>
                <li><NavLink to={"/paymentAndDelivery"}>Инструкции оплаты</NavLink></li>
                <li><NavLink to={"/warranty"}>Гарантии</NavLink></li>
                <li><NavLink to={"/granite-material"}>Материалы</NavLink></li>
                <li><NavLink to={"/catalog-title"}>Заголовок Каталога</NavLink></li>
                <li><NavLink to={"/footer"}>Подвал изменить фото</NavLink></li>

                {/* <li style={{ marginTop: "20px" }}><NavLink to={"/chip"}>Для тестов</NavLink></li> */}

            </ul>
        </Layout>
    )
}

export default SiteSetting
