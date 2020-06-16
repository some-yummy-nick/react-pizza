import React from 'react';

export const Svg = () => <>
    <div className="svg-wrapper" style={{"height": 0, "width": 0, "position": "absolute", "visibility": "hidden"}}>
        <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="basket">
                <path
                    d="M6.333 16.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM14.333 16.333a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666zM4.78 5h11.553l-1.12 5.593a1.334 1.334 0 01-1.333 1.074H6.833a1.334 1.334 0 01-1.333-1.16l-1.013-7.68a1.333 1.333 0 00-1.32-1.16h-1.5"
                   fill="transparent" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
            <symbol id="down">
                <path d="M10 5a.6.6 0 01-.186.44.6.6 0 01-.439.185H.625a.6.6 0 01-.44-.186A.6.6 0 010 5a.6.6 0 01.186-.44L4.56.187A.6.6 0 015 0a.6.6 0 01.44.186L9.813 4.56A.6.6 0 0110 5z"/>
            </symbol>
        </svg>

    </div>
</>;

export default Svg;

