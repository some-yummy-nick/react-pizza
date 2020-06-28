import React from 'react';
import {Link} from "react-router-dom";

const isEmpty = true;
export const Cart = () => <div className="cart">
    {isEmpty ?
        <div className="cart__empty">
            <div className="title cart__empty-title">Корзина пустая <span role="img" aria-label="sad emoji">😕</span>
            </div>
            <div className="cart__text cart__text_margin">Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы
                заказать пиццу,
                перейди на главную страницу.
            </div>
            <div className="cart__image">
                <img src="/images/shopping-cart.svg" alt=""/>
            </div>
            <Link to="/" className="btn btn_black cart__button">Вернуться назад</Link>
        </div> :
        <div className="cart__center">
            <div className="cart__top">
                <div className="title cart__title">
                    <svg width="31" height="31" className="icon icon_basket-big cart__basket">
                        <use xlinkHref="#basket"></use>
                    </svg>
                    Корзина
                </div>
                <button type="button" className="cart__clear reset-btn">
                    <svg width="20" height="20" className="icon icon_trash cart__clear-icon">
                        <use xlinkHref="#trash"></use>
                    </svg>
                    Очистить корзину
                </button>
            </div>
            <div className="cart__items">
                <div className="cart__item">
                    <div className="cart__info">
                        <div className="cart__img">
                            <img src="/images/pizza.png" alt=""/>
                        </div>
                        <div className="cart__desc">
                            <div className="cart__name">Сырный цыпленок</div>
                            <div className="cart__text">тонкое тесто, 26 см.</div>
                        </div>
                    </div>
                    <div className="cart__change">
                        <button type="button" className="reset-btn cart__minus">minus</button>
                        <input className="cart__number" defaultValue="2" type="number" min="1" max="99"/>
                        <button type="button" className="reset-btn cart__plus">plus</button>
                    </div>
                    <div className="cart__price">770 ₽</div>
                    <button type="button" className="cart__delete reset-btn">delete</button>
                </div>
            </div>
            <div className="cart__score">
                <div className="cart__amount">Всего пицц: <strong>3 шт.</strong></div>
                <div className="cart__sum">Сумма заказа: <span className="primary"><strong>900 ₽</strong></span></div>
            </div>
            <div className="cart__bottom">
                <Link to="/" className="btn btn_gray-border cart__back">
                    <svg width="8" height="14" className="icon icon_back cart__back-icon">
                        <use xlinkHref="#back"></use>
                    </svg>
                    Вернуться назад
                </Link>
                <Link to="/buy" className="btn btn_primary cart__buy">Оплатить сейчас</Link>
            </div>
        </div>
    }
</div>;

export default Cart;
