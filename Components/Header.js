import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Image from 'next/image';
import Logo from '../public/images/logo.png';

export default class Header extends Component {

    render(){
        return (
            <>
                <header className="header">
                    <div className="booking-header__main fixed-menu">
                        <div className="container position-relative">
                            <div className="row">
                                <div className="col col-md-2">
                                    <div className="booking-header__logo booking-flex-jstart-align-center h-100">
                                        <a title="Home Page" href="/">
                                            <Image src={Logo} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col col-md-10 position-static booking-menu-container">
                                    <div className="booking-menu booking-menu--main h-100">
                                        <div className="booking-menu__desktop-menu">
                                            <ul className="booking-list booking-list--menu menu">
                                                <li className="item-132 deeper parent js-booking-menu--mega-tab">
                                                    <a className="booking-link booking-link--menu-main sub-item-deeper booking-link--default booking-link--mega-tab-btn" aria-expanded="false">Experiences</a>
                                                </li>
                                                <li className="item-131 deeper parent js-booking-menu--mega-tab">
                                                    <a className="booking-link booking-link--menu-main sub-item-deeper booking-link--default booking-link--mega-tab-btn" aria-expanded="false">Destinations</a>
                                                </li>
                                                <li className="item-131 deeper parent js-booking-menu--mega-tab">
                                                    <a className="booking-link booking-link--menu-main sub-item-deeper booking-link--default booking-link--mega-tab-btn" aria-expanded="false">Lifestyle</a>
                                                </li>
                                                <li className="item-131 deeper parent js-booking-menu--mega-tab">
                                                    <a className="booking-link booking-link--menu-main sub-item-deeper booking-link--default booking-link--mega-tab-btn" aria-expanded="false">Hotels</a>
                                                </li>
                                                <li className="item-131 deeper parent js-booking-menu--mega-tab">
                                                    <a className="booking-link booking-link--menu-main sub-item-deeper booking-link--default booking-link--mega-tab-btn" aria-expanded="false">Trips</a>
                                                </li>                
                                                <li className="booking-header__favourites">
                                                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6">
                                                        <img src="/images/search (1).png" width="17px"/>
                                                    </a>
                                                </li>
                                                <li className="booking-header__wishlist">
                                                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6">
                                                        <img src="/images/heart.png" width="17px"/>
                                                    </a>
                                                </li>
                                                <li className="booking-header__account">
                                                    <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                                                        <img src="/images/user.png" width="17px"/>
                                                    </a>
                                                </li>
                                            </ul>          
                                        </div>
                                        <div>
                                            <Menu right width={ '260px' }>
                                                <a id="exp" className="menu-item" href="#">Experiences</a>
                                                <a id="destinations" className="menu-item" href="#">Destinations</a>
                                                <a id="lifestyle" className="menu-item" href="#">Lifestyle</a>
                                                <a id="hotels" className="menu-item" href="#">Hotels</a>
                                                <a id="trips" className="menu-item" href="#">Trips</a>
                                            </Menu>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* The `headerMargin` div adds a default margin under the fixed div, to ensure all margin is not needed in other places. */}
                <div className="headerMargin"></div>
                <style jsx>{`
                    .booking-header {
                        z-index: 30;
                        position: fixed;
                        width: 100%;
                        padding: 0;
                        top: 0;
                    }
                    .booking-header__main.fixed-menu {
                        -webkit-transition: all 0.3s ease 0s;
                        -moz-transition: all 0.3s ease 0s;
                        -ms-transition: all 0.3s ease 0s;
                        -o-transition: all 0.3s ease 0s;
                        transition: all 0.3s ease 0s;
                        z-index: 20;
                        position: fixed;
                        padding: 14px 0;
                        width: 100%;
                        top: 0;
                    }
                    .booking-header__main {
                        -webkit-box-shadow: 0 0 20px 0 rgb(0 0 0 / 15%);
                        -moz-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
                        box-shadow: 0 0 20px 0 rgb(0 0 0 / 15%);
                        height: 78px;
                        align-items: center;
                        padding: 20px 0;
                        display: flex;
                    }
                    .booking-header__main:before {
                        box-shadow: inset 0 0 8px 16px rgb(18 53 93 / 20%);
                        background-color: rgba(18, 53, 93, 0.7);
                        backdrop-filter: blur(5px);
                        position: absolute;
                        content: "";
                        bottom: 0;
                        right: 0;
                        left: 0;
                        top: 0;
                    }
                    .booking-flex-jstart-align-center {
                        -webkit-align-items: center;
                        justify-content: flex-start;
                        display: -webkit-flex;
                        align-items: center;
                        display: flex;
                    }
                    .h-100 {
                        height: 100%!important;
                    }
                    .booking-header__main.fixed-menu .top-logo {
                        -webkit-transition: all 0.3s ease-in-out 0s;
                        -moz-transition: all 0.3s ease-in-out 0s;
                        -ms-transition: all 0.3s ease-in-out 0s;
                        -o-transition: all 0.3s ease-in-out 0s;
                        transition: all 0.3s ease-in-out 0s;
                    }
                    .top-logo {
                        -webkit-transition: all 0.3s ease 0.1s;
                        -moz-transition: all 0.3s ease 0.1s;
                        -ms-transition: all 0.3s ease 0.1s;
                        -o-transition: all 0.3s ease 0.1s;
                        transition: all 0.3s ease 0.1s;
                        max-height: 48px;
                    }
                    svg {
                        overflow: hidden;
                        vertical-align: middle;
                    }
                    .position-static {
                        position: static!important;
                    }
                    .booking-menu--main {
                        display: flex;
                        justify-content: flex-end;
                        align-items: center;
                    }
                    .booking-menu {
                        padding: 0;
                    }
                    .booking-menu__desktop-menu {
                        justify-content: center;
                        flex: 1 0 auto;
                        display: flex;
                    }
                    .booking-menu__desktop-menu ul {
                        display: flex;
                    }
                    .booking-list--menu {
                        text-transform: none;
                    }
                    .booking-list--menu li {
                        line-height: 1.5em;
                        display: block;
                        margin: 0;
                    }
                    .booking-list li, .booking-card__message ul li, .booking-card__content ul li, .booking-list-default-light ul li, .booking-list-default-ticks ul li, .booking-list-default-crosses ul li, .booking-list-default-large-ticks ul li, .booking-list-circle-checks ul li, .booking-blog .pagination ul li, .booking-blog .pagenav li {
                        padding: 0;
                    }
                    .booking-menu__mega-tab-btn, .booking-link--mega-tab-btn, a.booking-link--mega-tab-btn:not([href]):not([tabindex]), a.nav-header:not([href]):not([tabindex]), .booking-link--mega-tab {
                        font-family: "Lato", Helvetica, Arial, sans-serif;
                        color: #FFF;
                        font-weight: bold;
                    }
                    .booking-link--default, a:not([href]):not([tabindex]), .booking-blog .pagination a {
                        color: #10365C;
                    }
                    .booking-link, a:not([href]):not([tabindex]), .pagination .page-item .page-link, .booking-blog .pagination a {
                        color: #10365C;
                    }
                    .booking-menu--main .booking-link--menu-main, .booking-menu--main .booking-menu__main .nav-header, .booking-menu__main .booking-menu--main .nav-header, .booking-menu--main .booking-menu__main .nav-link, .booking-menu__main .booking-menu--main .nav-link, .booking-menu--main .booking-link--mega-tab {
                        font-family: "Lato", Helvetica, Arial, sans-serif;
                        color: #FFF;
                        font-weight: bold;
                    }
                    a:not([href]) {
                        color: inherit;
                        text-decoration: none;
                    }
                    .booking-link--menu-main, .booking-menu__main .nav-header, .booking-menu__main .nav-link, .booking-link--mega-tab {
                        font-size: 15px;
                        padding: 10px 20px;
                        line-height: 1em;
                        text-decoration: none;
                        color: #444;
                    }
                    .booking-menu .dropdown-menu {
                        font-size: 1.1rem;
                    }
                    .row {
                        margin-right: -15px;
                        margin-left: -15px;
                    }
                    .booking-menu__mega-tab-dropdown {
                        -webkit-box-shadow: inset 0 10px 15px -8px rgb(0 0 0 / 10%);
                        -moz-box-shadow: inset 0 10px 15px -8px rgba(0, 0, 0, 0.1);
                        box-shadow: inset 0 10px 15px -8px rgb(0 0 0 / 10%);
                        transform: translate(-49%, 0);
                        background: #FFF;
                        top: 78px;
                        text-align: center;
                        padding: 30px 0 0;
                        max-width: 1240px;
                        border-radius: 0;
                        position: fixed;
                        margin: 0 auto;
                        display: none;
                        border: none;
                        color: #10365C;
                        width: 100%;
                        left: 50%;
                    }
                    .sppb-row, .row {
                        -webkit-flex-wrap: wrap;
                        display: -webkit-flex;
                    }
                    .justify-content-end {
                        -ms-flex-pack: end!important;
                        justify-content: flex-end!important;
                    }
                    .dropdown-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        z-index: 1000;
                        display: none;
                        float: left;
                        min-width: 10rem;
                        padding: .5rem 0;
                        margin: .125rem 0 0;
                        font-size: 1rem;
                        color: #212529;
                        text-align: left;
                        list-style: none;
                        background-color: #fff;
                        background-clip: padding-box;
                        border: 1px solid rgba(0,0,0,.15);
                        border-radius: .25rem;
                    }
                    .booking-menu__mega-tab-custom-content {
                        border-bottom: 10px solid #10365C;
                        background: #FFF;
                        padding: 0 30px 30px;
                        margin: 20px 0 0;
                        width: 100%;
                    }
                    .booking-header__favourites,
                    .booking-header__auth {
                        display: inline-block;
                        margin: 0 0 0 15px;
                    }
                    .booking-header__hamburger {
                        color: #FFF !important;
                        margin: 0 0 0 15px;
                        display: none;
                        padding: 8px;
                    }
                    .booking-menu__main-mobile {
                        overflow: auto;
                        height: 85vh;
                        width: 100%;
                        padding: 0;
                        position: absolute;
                        top: 0;
                    }
                    .text-left {
                        text-align: left!important;
                    }
                    .booking-menu-container{
                        z-index: 9;
                    }
                    .booking-header__favourites,
                    .booking-header__wishlist,
                    .booking-header__account{
                        padding-top: 2px !important;
                    }
                    .booking-header__main.fixed-menu .row{
                        justify-content: space-between;
                    }
                    .booking-header__logo{
                        max-width: 75%;
                    }
                    @media screen and (min-width: 1024px) and (max-width: 1366px){
                        .booking-header__main.fixed-menu{
                            padding: 30px 40px 30px 30px;
                        } 
                        .booking-header__logo {
                            max-width: 68% !important;
                        } 
                    }
                    @media (min-width: 992px){
                        .d-lg-none {
                            display: none!important;
                        }
                    }
                    `}</style>
            </>
    );
}
};
