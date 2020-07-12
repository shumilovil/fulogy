import React from 'react';
import './BottomMenu.css';

export const BottomMenu = (props) => {
    return (
        <div className='bottomMenu'>
            <div className='cell'>
                <div className='menuItem'>
                    <span>Вариант кухни</span>
                </div>
                <div className='underline'></div>
            </div>
            <div className='cell'>
                <div className='menuItem'>
                    <span>Размеры</span>
                </div>
                <div className='underline'></div>
            </div>
            <div className='cell'>
                <div className='menuItem'>
                    <span>Сенсор</span>
                </div>
                <div className='underline'></div>
            </div>
            <div className='cell'>
                <div className='menuItem'>
                    <span>Питающий кабель</span>
                </div>
                <div className='underline'></div>
            </div>
            <div className='cell'>
                <div className='menuItem'>
                    <span>Блок питания</span>
                </div>
                <div className='underline'></div>
            </div>
            <div className='cell chosen'>
                <div className='menuItem'>
                    <span>Цвет свечения</span>
                </div>
                <div className='underline'></div>
            </div>
            <div className='cell'>
                <div className='menuItem'>
                    <span>Монтаж</span>
                </div>
                <div className='underline'></div>
            </div>
            <div className='cell'>
                <div className='menuItem'>
                    <span>Корзина</span>
                </div>
                <div className='underline'></div>
            </div>
        </div>
    )
}