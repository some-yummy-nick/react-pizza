import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {removeFromCart, addQuantity, subQuantity, clearCart} from "store/actions/cart";

const availableTypes = ['тонкое', 'традиционное'];

export const Cart = ({items, total, removeFromCart, addQuantity, subQuantity, clearCart}) =>
    <div className="cart">
        {!items.length ?
            <div className="cart__empty">
                <div className="title cart__empty-title">Корзина пустая <span role="img"
                                                                              aria-label="sad emoji">😕</span>
                </div>
                <div className="cart__text cart__text_margin">Вероятней всего, вы не заказывали ещё пиццу. Для того,
                    чтобы
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
                    <button type="button" className="cart__clear reset-btn" onClick={() => clearCart()}>
                        <svg width="20" height="20" className="icon icon_trash cart__clear-icon">
                            <use xlinkHref="#trash"></use>
                        </svg>
                        Очистить корзину
                    </button>
                </div>
                <div className="cart__items">
                    {items.map(item => <div className="cart__item" key={`cart-${item.id}`}>
                        <div className="cart__info">
                            <div className="cart__img">
                                <img src={item.imageUrl} alt=""/>
                            </div>
                            <div className="cart__desc">
                                <div className="cart__name">{item.name}</div>
                                <div className="cart__text">{availableTypes[item.types]} тесто, {item.sizes} см.</div>
                            </div>
                        </div>
                        <div className="cart__change">
                            <button type="button" className="reset-btn cart__minus"
                                    onClick={() => subQuantity(item)}>minus
                            </button>
                            <input className="cart__number" name={item.name} value={item.quantity} onChange={() => {
                            }}
                                   type="number" min="1" max="99"/>
                            <button type="button" className="reset-btn cart__plus"
                                    onClick={() => addQuantity(item)}>plus
                            </button>
                        </div>
                        <div className="cart__price">{item.price * item.quantity} ₽</div>
                        <button type="button" className="cart__delete reset-btn"
                                onClick={() => removeFromCart(item)}>delete
                        </button>
                    </div>)}

                </div>
                <div className="cart__score">
                    <div className="cart__amount">Всего
                        пицц: <strong>{items.reduce((accumulator, item) => accumulator + item.quantity, 0)} шт.</strong>
                    </div>
                    <div className="cart__sum">Сумма заказа: <span
                        className="primary"><strong>{total} ₽</strong></span>
                    </div>
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

const mapStateToProps = ({cart}) => ({
    items: cart.items,
    total: cart.total,
});

export default connect(mapStateToProps, {removeFromCart, addQuantity, subQuantity, clearCart})(Cart);
