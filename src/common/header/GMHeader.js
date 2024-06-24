import React from 'react';
import Logo from '../../elements/logo/Logo';
import MobileMenu from './MobileMenu';
import Nav from './Nav';
import StickyHeader from './StickyHeader';

const GMHeader = () => {

    const sticky = StickyHeader(100);

    const MobileMenuHandler = () => {
        document.querySelector('.mobilemenu-popup').classList.toggle("show");
        document.querySelector('body').classList.toggle("mobilemenu-show");

        var elements = document.querySelectorAll('.mobilemenu-popup .menu-item-has-children > a');

        for (var i in elements) {
            if (elements.hasOwnProperty(i)) {
                elements[i].onclick = function () {
                    this.parentElement.querySelector('.gm-submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }
    }

    return (
        <>
            <header className="header gm-header header-style-1">
                <div className={`gm-mainmenu ${sticky ? "gm-sticky" : ""}`}>
                    <div className="container">
                        <div className="header-navbar">
                            <div className="header-logo">
                                <Logo limage="/images/gunduz-medya-logo-light.png"
                                    dimage="/images/gunduzmedya-logo-dark.png"
                                    simage="/images/gunduz-medya-logo-light.png"
                                />
                            </div>
                            <div className="header-main-nav">
                                <Nav />
                            </div>
                            <div className="header-action">
                                <ul className="list-unstyled">
                                    <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                                        <button className="btn-wrap" onClick={MobileMenuHandler}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu MobileHandler={MobileMenuHandler} />
        </>
    )
}

export default GMHeader;