import React from 'react';
import { FaBehance, FaDribbble, FaEnvelopeOpen, FaFacebookF, FaInstagram, FaLinkedin, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';

const getServiceData = ServiceData;

const GMFooter = ({ parentClass }) => {

    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><Link to={{ pathname: "//www.facebook.com/gunduzmedya" }} target='_blank'><FaFacebookF /></Link></li>
                            <li><Link to={{ pathname: "//twitter.com/gunduzmedya_" }} target='_blank'><FaXTwitter /></Link></li>
                            <li><Link to={{ pathname: "//tr.pinterest.com/gunduzmedya/" }} target='_blank'><FaPinterestP /></Link></li>
                            <li><Link to={{ pathname: "//www.linkedin.com/company/78433546" }} target='_blank'><FaLinkedin /></Link></li>
                            <li><Link to={{ pathname: "//www.instagram.com/gunduz_medya" }} target='_blank'><FaInstagram /></Link></li>
                            <li><Link to={{ pathname: "//dribbble.com/gunduzmedya" }} target='_blank'><FaDribbble /></Link></li>
                            <li><Link to={{ pathname: "//www.behance.net/gunduzmedya" }} target='_blank'><FaBehance /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <h2 className="title">Haber Bülteni!</h2>
                                    <p>Hizmetlerimiz, gündem ve teknoloji haberleri içeren haber bültenimize abone olabilirsiniz! Spam yok!</p>
                                    <form>
                                        <div className="input-group">
                                            <span className="mail-icon"><FaEnvelopeOpen /> </span>
                                            <input type="email" className="form-control" placeholder="Email adresiniz" />
                                            <button className="subscribe-btn" type="submit">Abone Ol</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Hizmetler</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                {getServiceData.slice(0, 6).map((data, index) => (
                                                    <li key={index}>
                                                        <Link to={process.env.PUBLIC_URL + `/hizmetler/${slugify(data.url)}`}>{data.title}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Kaynaklar</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/projeler"}>Projeler</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/hizmetler"}>Hizmetler</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/hakkimizda"}>Hakkımzda</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Destek</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/iletisim"}>İletişim</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/gizlilik-politikasi"}>Gizlilik Politikası</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Şartlar ve Koşullar</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()} <a href="https://www.gunduzmedya.com/">Gündüz Medya</a></span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link to={process.env.PUBLIC_URL + "/gizlilik-politikasi"}>Gizlilik Politikası</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Şartlar ve Koşullar</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Çerez Politikası</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default GMFooter;