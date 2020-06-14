import React from 'react';
import {Link} from "react-router-dom";

export const Logo = () =>
    <Link to="/" className="logo">
        <div className="row align-center logo__wrapper">
            <img src="/images/logo.png" alt="pizza" className="logo__image"/>
            <div className="logo__desc">
                <div className="logo__title">React Pizza</div>
                <div className="logo__text">самая вкусная пицца во вселенной</div>
            </div>
        </div>
    </Link>;

export default Logo;
