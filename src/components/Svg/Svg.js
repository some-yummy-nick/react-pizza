import React from 'react';

export const Svg = () => <>
    <div className="svg-wrapper" style={{"height": 0, "width": 0, "position": "absolute", "visibility": "hidden"}}>
        <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="basket">
                <path
                    d="M6.333 16.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM14.333 16.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM4.78 5h11.553l-1.12 5.593a1.334 1.334 0 01-1.333 1.074H6.833a1.334 1.334 0 01-1.333-1.16l-1.013-7.68a1.333 1.333 0 00-1.32-1.16h-1.5"
                   fill="transparent" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
        </svg>
    </div>
</>;

export default Svg;

