import React from 'react';

function Logo(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={86}
            height={50}
            fill="none"
            {...props}
        >
            <circle
                cx="25"
                cy="25"
                r="25"
                fill="#04939C"
            />
            <path
                d="M21.8596 33.8467L34.7742 38.5473L32.9959 43.4333L13.999 36.519L24.7431 7L30.8253 9.21375L21.8596 33.8467Z"
                fill="white" />
            <path
                d="M63.2979 21.7305L61.0889 24.1094V30H56.8408V9.38281H61.0889V18.7285L62.958 16.1655L68.2114 9.38281H73.4365L66.1157 18.5444L73.6489 30H68.5938L63.2979 21.7305Z" fill="black" />
            <path
                d="M84.2734 18H81.9297V13.125H77.3594V18H75.0156V6.625H77.3594V11.2344H81.9297V6.625H84.2734V18Z"
                fill="black" />
        </svg>
    );
}

export default Logo;