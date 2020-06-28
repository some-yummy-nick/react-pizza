import React from 'react';

export const Svg = () => <>
    <div className="svg-wrapper" style={{"height": 0, "width": 0, "position": "absolute", "visibility": "hidden"}}>
        <svg xmlns="http://www.w3.org/2000/svg">
            <symbol id="basket" viewBox="0 0 31 31">
                <path d="M10.667 28.792a2.417 2.417 0 100-4.834 2.417 2.417 0 000 4.834zM25.167 28.792a2.417 2.417 0 100-4.834 2.417 2.417 0 000 4.834zM7.851 8.25h20.94l-2.03 10.138a2.417 2.417 0 01-2.416 1.945H11.573a2.417 2.417 0 01-2.417-2.102L7.32 4.31a2.417 2.417 0 00-2.392-2.103H2.208"
                      fill="transparent" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"></path>
            </symbol>
            <symbol id="down">
                <path d="M10 5a.6.6 0 01-.186.44.6.6 0 01-.439.185H.625a.6.6 0 01-.44-.186A.6.6 0 010 5a.6.6 0 01.186-.44L4.56.187A.6.6 0 015 0a.6.6 0 01.44.186L9.813 4.56A.6.6 0 0110 5z"></path>
            </symbol>
            <symbol id="trash">
                <path d="M2.5 5h15M6.667 5V3.333a1.667 1.667 0 011.666-1.666h3.334a1.666 1.666 0 011.666 1.666V5m2.5 0v11.667a1.667 1.667 0 01-1.666 1.666H5.833a1.667 1.667 0 01-1.666-1.666V5h11.666zM8.333 9.167v5M11.667 9.167v5"
                      fill="transparent"  strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
            </symbol>
            <symbol id="back" fill="transparent" >
                <path d="M7 13L1 6.93 6.862 1"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </symbol>
        </svg>
    </div>
</>;

export default Svg;

