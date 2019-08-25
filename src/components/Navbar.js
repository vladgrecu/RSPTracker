import React from 'react';

const Navbar = (props) => {
    return (
        <div className="bg-black tc relative">
            <h1 className="ma1 pa0 pointer white">
                <svg className="w2 h2 mr2 v-top black-025 pa1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,6A3,3 0 0,0 9,9A3,3 0 0,0 12,12A3,3 0 0,0 15,9A3,3 0 0,0 12,6M6,8.17A2.5,2.5 0 0,0 3.5,10.67A2.5,2.5 0 0,0 6,13.17C6.88,13.17 7.65,12.71 8.09,12.03C7.42,11.18 7,10.15 7,9C7,8.8 7,8.6 7.04,8.4C6.72,8.25 6.37,8.17 6,8.17M18,8.17C17.63,8.17 17.28,8.25 16.96,8.4C17,8.6 17,8.8 17,9C17,10.15 16.58,11.18 15.91,12.03C16.35,12.71 17.12,13.17 18,13.17A2.5,2.5 0 0,0 20.5,10.67A2.5,2.5 0 0,0 18,8.17M12,14C10,14 6,15 6,17V19H18V17C18,15 14,14 12,14M4.67,14.97C3,15.26 1,16.04 1,17.33V19H4V17C4,16.22 4.29,15.53 4.67,14.97M19.33,14.97C19.71,15.53 20,16.22 20,17V19H23V17.33C23,16.04 21,15.26 19.33,14.97Z" />
                </svg>
                <span className="fw3 white">RSP</span>
                <span className="fw7 custom--text-primary white">Tracker</span>
            </h1>
            {props.children}
            <h6 className="white ma2 pa2 absolute top-1 right-0 w3">Welcome, Vlad!</h6>
        </div>
    )
};

export default Navbar;