import React from 'react';

const filters = [
    {
        title: "all",
        text: "Все"
    },
    {
        title: "meat",
        text: "Мясные"
    },
    {
        title: "vegetarian",
        text: "Вегетарианская"
    },
    {
        title: "grill",
        text: "Гриль"
    },
    {
        title: "spice",
        text: "Острые"
    },
    {
        title: "closed",
        text: "Закрытые"
    },
];

export const Filter = () => <>
    <div className="filter">
        <ul className="filter__items reset-list">
            {
                filters.map(filter =>
                    <li className="filter__item">
                        <button className="filter__button reset-btn" data-name={filter.title} type="button">{filter.text}</button>
                    </li>
                )
            }
        </ul>
    </div>
</>;

export default Filter;
