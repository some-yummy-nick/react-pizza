import React from 'react';
import {Link} from "react-router-dom";

export const Basket = () =>
    <div className="basket">
        <Link className="basket__link" to="/cart">
            <div className="basket__wrapper">
                <div className="basket__sum">520 ₽</div>
                <div className="basket__count">
                    <svg width="18" height="18" className="icon icon_basket basket__icon">
                        <use xlinkHref="#basket"/>
                    </svg>
                    3
                </div>
            </div>
        </Link>
    </div>;

export default Basket;
