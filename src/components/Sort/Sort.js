import React from 'react';
import {setSort} from "store/actions/sort";
import {connect} from "react-redux";
import classNames from "classnames";

const sorts = [
    {
        id: 0,
        title: "rating",
        text: "популярности"
    },
    {
        id: 1,
        title: "price",
        text: "по цене"
    },
    {
        id: 2,
        title: "name",
        text: "по алфавиту"
    },
];

export const Sort = ({sort, setSort}) =>
    <div className="sort">
        <div className="sort__wrapper">
            <div className="sort__title">
                <svg width="10" height="6"
                     className={`icon icon_down sort__icon${!sort.isReversed ? " reversed" : ""}`}>
                    <use xlinkHref="#down"/>
                </svg>
                Сортировка по: <button type="button" id="dropdown-title"
                                       className="sort__selected reset-btn"
                                       onClick={() => setSort(sort)}>{sort.text}</button></div>
            <ul className="sort__list reset-list" aria-labelledby="dropdown-title">
                {
                    sorts.map(item =>
                        <li className="sort__item" key={`sort-${item.id}`}>
                            <button type="button" className={classNames("sort__button reset-btn", {
                                active: item.title === sort.title
                            })}
                                    onClick={() => setSort(item)}>{item.text}</button>
                        </li>
                    )
                }
            </ul>
        </div>
    </div>;

const mapStateToProps = state => ({
    sort: state.sort.sort,
});

export default connect(mapStateToProps, {setSort})(Sort);
