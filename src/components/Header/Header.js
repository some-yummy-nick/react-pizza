import React from 'react';

import Logo from "components/Logo/Logo";
import Basket from "components/Basket/Basket";

export const Header = () =>
    <div className="header">
        <div className="header__wrapper">
            <Logo/>
            <Basket/>
        </div>
    </div>;

export default Header;
