import React from 'react';
import {connect} from "react-redux";
import {setCategory} from "store/actions/category";

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

export const Filter = ({category, setCategory}) =>
    <div className="filter">
        <ul className="filter__items reset-list">
            {
                filters.map(filter =>
                    <li className="filter__item" key={`filter-${filter.id}`}>
                        <button className={`filter__button reset-btn${filter.id === category.id ? " active" : ""}`}
                                data-name={filter.title}
                                onClick={() => setCategory(filter)}
                                type="button">{filter.text}</button>
                    </li>
                )
            }
        </ul>
    </div>;


const mapStateToProps = state => ({
    category: state.category.category,
});

export default connect(mapStateToProps, {setCategory})(Filter);
