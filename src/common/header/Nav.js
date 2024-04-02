import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li><Link to={process.env.PUBLIC_URL + "/hakkimizda"}>Hakkımızda</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/hizmetler"}>Hizmetler</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/projeler"}>Projeler</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link></li>
                <li><Link to={process.env.PUBLIC_URL + "/iletisim"}>İletişim</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;