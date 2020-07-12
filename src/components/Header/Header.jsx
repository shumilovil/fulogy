import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import burger from '../../assets/burger.png';
import cross from '../../assets/cross.png'
import cart from '../../assets/cart.png';
import { useState } from 'react';

export const Header = (props) => {

    const [isMenuVisible, setMenuVisibility] = useState(false);

    const handleMenuVisibility = () => {
        setMenuVisibility(!isMenuVisible)
    };

    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt='' />
            </div>
            <div className='burgerButton' onClick={handleMenuVisibility}>
                <img src={isMenuVisible ? cross : burger} alt="" />
            </div>
            <div className='cart'>
                <img src={cart} alt="" />
                <div className='cartCircle'>
                    1
                </div>
            </div>
            {
                isMenuVisible ?
                    <div className='menu'>
                        <div className='menuCell'>
                            <span>Обучающее видео</span>
                        </div>
                        <div className='menuCell'>
                            <span>Оформление заказа</span>
                        </div>
                        <div className='menuCell'>
                            <span>Оплата</span>
                        </div>
                        <div className='menuCell'>
                            <span>Доставка</span>
                        </div>
                        <div className='menuCell'>
                            <span>Гарантия</span>
                        </div>
                        <div className='menuCell'>
                            <span>Возврат</span>
                        </div>
                        <div className='menuCell'>
                            <span>Контакты</span>
                        </div>
                        <div className='menuCell'>
                            <span>Партнерам</span>
                        </div>
                    </div>
                    : null
            }            
        </div>
    )
}