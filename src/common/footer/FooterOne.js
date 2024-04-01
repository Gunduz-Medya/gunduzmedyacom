import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaPinterestP, FaLinkedin, FaInstagram, FaVimeoV, FaDribbble, FaBehance, FaEnvelopeOpen, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';

const getServiceData = ServiceData;

const FooterOne = ({parentClass}) => {
    
    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><Link to="https://www.facebook.com/gunduzmedya"><FaFacebookF /></Link></li>
                            <li><Link to="https://twitter.com/gunduzmedya_"><FaXTwitter /></Link></li>
                            <li><Link to="https://tr.pinterest.com/gunduzmedya/"><FaPinterestP /></Link></li>
                            <li><Link to="https://www.linkedin.com/company/78433546"><FaLinkedin /></Link></li>
                            <li><Link to="https://www.instagram.com/gunduz_medya"><FaInstagram /></Link></li>
                            <li><Link to="https://dribbble.com/gunduzmedya"><FaDribbble /></Link></li>
                            <li><Link to="https://www.behance.net/"><FaBehance /></Link></li>
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
                                                <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blog</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/case-study"}>Örnek Çalışmalar</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Portfolyo</Link></li>
                                                <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>Önerilenler</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Destek</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>İletişim</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Gizlilik Politikası</Link></li>
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
                                    <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Gizlilik Politikası</Link></li>
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

export default FooterOne;