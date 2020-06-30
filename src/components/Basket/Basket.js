import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

export const Basket = ({items, total}) =>
    <>
        {items.length ?
            <div className="basket">
                <Link className="basket__link" to="/cart">
                    <div className="basket__wrapper">
                        <div
                            className="basket__sum">{total} ₽
                        </div>
                        <div className="basket__count">
                            <svg width="18" height="18" className="icon icon_basket basket__icon">
                                <use xlinkHref="#basket"/>
                            </svg>
                            {items.length}
                        </div>
                    </div>
                </Link>
            </div> : ""
        }
    </>;

const mapStateToProps = ({cart}) => ({
    items: cart.items,
    total: cart.total,
});

export default connect(mapStateToProps)(Basket);
