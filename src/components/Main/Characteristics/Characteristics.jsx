import React from 'react';
import './Characteristics.css';

export const Characteristics = (props) => {
    return (
        <div className='characteristics'>
            <div className='line'>
                <div className='leftColumn'>
                    <span>Класс:</span>
                </div>
                <div className='rightColumn'>
                    <div className='standart'>
                    <span>Standart</span>
                    </div>
                </div>
            </div>
            <div className='line'>
                <div className='leftColumn'>
                    <span>Потребляемая мощность:</span>
                </div>
                <div className='rightColumn'>
                    <span>59 Вт</span>
                </div>
            </div>
            <div className='line'>
                <div className='leftColumn'>
                    <span>Сила света:</span>
                </div>
                <div className='rightColumn'>
                    <span>3459 Люмен = 7,5 ламп накаливания по 40 Вт. </span>
                </div>
            </div>
            <div className='line'>
                <div className='leftColumn'>
                    <span>Гарантия:</span>
                </div>
                <div className='rightColumn'>
                    <span>3 года</span>
                </div>
            </div>
            <div className='line'>
                <div className='leftColumn'>
                    <span>Монтаж:</span>
                </div>
                <div className='rightColumn'>
                    <span>Да</span>
                </div>
            </div>
            <div className='line'>
                <div className='leftColumn'>
                    <span>Итого сумма:</span>
                </div>
                <div className='rightColumn'>
                    <span>2594 рублей</span>
                </div>
            </div>
        </div>
    )
}