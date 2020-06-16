import React from 'react';
import Filter from "components/Filter/Filter";
import Sort from "components/Sort/Sort";

export const Choose = () =>
    <div className="choose">
        <div className="choose__wrapper">
            <Filter/>
            <Sort/>
        </div>
    </div>;

export default Choose;
