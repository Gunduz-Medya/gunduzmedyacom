import FsLightbox from 'fslightbox-react';
import React, { useState } from 'react';
import { FaInstagram, FaPlay, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import Tilty from 'react-tilty';
import SEO from '../common/SEO';
import FooterOne from '../common/footer/FooterOne';
import Header from '../common/header/Header';
import CaseStudyData from '../data/casestudy/CaseStudyData.json';
import BcrumbBannerTwo from '../elements/breadcrumb/BcrumbBannerTwo';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import { slugify } from '../utils';

const allCaseData = CaseStudyData;


const CaseDetails = () => {

    const params = useParams();
    const caseSlug = params.slug;

    const getCaseData = allCaseData.filter(data => slugify(data.title) === caseSlug);
    const detailsCase = getCaseData[0];

    const [toggler, setToggler] = useState(false);

    return (
        <>
            <SEO title={detailsCase.title} />
            <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BcrumbBannerTwo
                    title={detailsCase.title}
                    paragraph={detailsCase.excerpt}
                    mainThumb={detailsCase.thumb}
                />

                <div className="section-padding case-study-brief bg-color-mercury">
                    <div className="container">
                        {detailsCase.subProjects ? detailsCase.subProjects.map((data) => (
                            <div key={data.id} className={`process-work ${(data.id % 2 === 0) ? "content-reverse" : ""}`}>
                                <div className="col-lg-6">
                                    <div className="case-study-featured-thumb">
                                        <Tilty perspective={2000}>
                                            <img src={process.env.PUBLIC_URL + data.thumb} alt="Case Study" />
                                        </Tilty>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6 offset-xl-1">
                                    <div className="case-study-featured">
                                        <div className="section-heading heading-left">
                                            <h2 className="title">{data.title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: detailsCase.details }}></div>
                                            <div className="footer-social-link">
                                                <ul className="list-unstyled">
                                                    <li><Link to={data.socials.instagram}><FaInstagram /></Link></li>
                                                    <li><Link to={data.socials.x}><FaXTwitter /></Link></li>
                                                    <li><Link to={data.socials.youtube}><FaYoutube /></Link></li>
                                                    <li><Link to={data.socials.spotify}><FaSpotify /></Link></li>
                                                    <li><Link to={data.socials.tiktok}><FaTiktok /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div>
                                Hazırlanıyor...
                            </div>
                        )}
                        {/* <div className="row align-items-xl-center">
                            <div className="col-lg-6">
                                <div className="case-study-featured-thumb">
                                    <Tilty perspective={2000}>
                                        <img src={process.env.PUBLIC_URL + detailsCase.thumb} alt="Case Study" />
                                    </Tilty>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 offset-xl-1">
                                <div className="case-study-featured">
                                    <div className="section-heading heading-left">
                                        <h2 className="title">{detailsCase.subProjects.title}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: detailsCase.details }}></div>
                                        <div className="footer-social-link">
                                            <ul className="list-unstyled">
                                                <li><Link to="https://www.instagram.com/moviepartx"><FaInstagram /></Link></li>
                                                <li><Link to="https://x.com/moviepartx_"><FaXTwitter /></Link></li>
                                                <li><Link to="https://www.youtube.com/@moviepartx"><FaYoutube /></Link></li>
                                                <li><Link to="https://www.youtube.com/@moviepartx"><FaSpotify /></Link></li>
                                                <li><Link to="https://www.youtube.com/@moviepartx"><FaTiktok /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="section-padding-equal case-study-solution">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="section-heading heading-left">
                                    <h2 className="title">Solutions</h2>
                                    <div dangerouslySetInnerHTML={{ __html: detailsCase.solution }}></div>
                                </div>
                                <div className="about-expert">
                                    <div className="thumbnail">
                                        <img src={process.env.PUBLIC_URL + "/images/about/about-1.png"} alt="Thumbnail" />
                                        <div className="popup-video">
                                            <button className="play-btn" onClick={() => setToggler(!toggler)}><FaPlay /></button>
                                        </div>
                                        <FsLightbox toggler={toggler} sources={['https://www.youtube.com/watch?v=1iIZeIy7TqM']} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="shape-group-10 list-unstyled">
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Line" /></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                    </ul>
                </div>
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default CaseDetails;