import React from 'react';

export const List = () =>
    <div className="list">
        <h1 className="list__title">Все пиццы</h1>
        <div className="list__items">
            <div className="list__item">
                <div className="list__image">
                    <img src="/images/pizza.png" alt="pizza"/>
                </div>
                <div className="list__desc">
                    <div className="list__name">Чизбургер-пицца</div>
                    <div className="list__block">
                        <ul className="list__filters list__filters_top reset-list">
                            <li className="list__filter list__filter_half">
                                <button type="button" className="list__button reset-btn active">тонкое</button>
                            </li>
                            <li className="list__filter list__filter_half">
                                <button type="button" className="list__button reset-btn">традиционное</button>
                            </li>
                        </ul>
                        <ul className="list__filters reset-list">
                            <li className="list__filter">
                                <button type="button" className="list__button reset-btn">26 см.</button>
                            </li>
                            <li className="list__filter">
                                <button type="button" className="list__button reset-btn">30 см.</button>
                            </li>
                            <li className="list__filter">
                                <button type="button" className="list__button reset-btn" disabled>40 см.</button>
                            </li>
                        </ul>
                    </div>
                    <div className="list__bottom">
                        <div className="list__price">от 395 ₽</div>
                        <button type="button" className="list__add reset-btn">
                            <span className="list__add-text">Добавить</span>
                            <span className="list__add-number">2</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>;

export default List;
