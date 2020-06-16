import React from 'react';

const sorts = [
    {
        title: "popular",
        text: "популярности"
    },
    {
        title: "price",
        text: "по цене"
    },
    {
        title: "alphabet",
        text: "по алфавиту"
    },
];
export const Sort = () =>
    <div className="sort">
        <div className="sort__title ">
            <svg width="10" height="6" className="icon icon_down sort__icon">
                <use xlinkHref="#down"/>
            </svg>
            Сортировка по: <button type="button" className="sort__selected reset-btn">популярности</button></div>
        <ul className="sort__list reset-list">
            {
                sorts.map(sort =>
                    <li className="sort__item">
                        <button type="button" className="sort__button reset-btn">{sort.text}</button>
                    </li>
                )
            }
        </ul>
    </div>;

export default Sort;
