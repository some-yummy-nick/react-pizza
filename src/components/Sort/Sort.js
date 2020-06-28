import React from 'react';

const sorts = [
    {
        id: 0,
        title: "popular",
        text: "популярности"
    },
    {
        id: 1,
        title: "price",
        text: "по цене"
    },
    {
        id: 2,
        title: "alphabet",
        text: "по алфавиту"
    },
];
export const Sort = () =>
    <div className="sort">
        <div className="sort__wrapper">
            <div className="sort__title">
                <svg width="10" height="6" className="icon icon_down sort__icon">
                    <use xlinkHref="#down"/>
                </svg>
                Сортировка по: <button type="button" id="dropdown-title"
                                       className="sort__selected reset-btn">популярности</button></div>
            <ul className="sort__list reset-list" aria-labelledby="dropdown-title">
                {
                    sorts.map(sort =>
                        <li className="sort__item" key={`sort-${sort.id}`}>
                            <button type="button" className="sort__button reset-btn">{sort.text}</button>
                        </li>
                    )
                }
            </ul>
        </div>
    </div>;

export default Sort;
