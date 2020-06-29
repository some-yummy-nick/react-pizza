import React from 'react';

const filters = [
    {
        id: 0,
        title: "all",
        text: "Все"
    },
    {
        id: 1,
        title: "meat",
        text: "Мясные"
    },
    {
        id: 2,
        title: "vegetarian",
        text: "Вегетарианская"
    },
    {
        id: 3,
        title: "grill",
        text: "Гриль"
    },
    {
        id: 4,
        title: "spice",
        text: "Острые"
    },
    {
        id: 5,
        title: "closed",
        text: "Закрытые"
    },
];

export const Filter = () =>
    <div className="filter">
        <ul className="filter__items reset-list">
            {
                filters.map(filter =>
                    <li className="filter__item" key={`filter-${filter.id}`}>
                        <button className="filter__button reset-btn" data-name={filter.title}
                                type="button">{filter.text}</button>
                    </li>
                )
            }
        </ul>
    </div>;

export default Filter;
