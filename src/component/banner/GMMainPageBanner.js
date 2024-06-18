import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Link } from 'react-router-dom';


const GMMainPageBanner = () => {
    return (
        <div className="banner banner-style-1">
            <div className="container">
                <div className="row align-items-end align-items-xl-start">
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <AnimationOnScroll animateIn="fadeInUp" animateOnce={true} delay={100}>
                                <h1 className="title">Dijital Medya Uygulamaları.</h1>
                                <span className="subtitle">Deneyimli Ürün Geliştirme Ekibimizle Projelerinizi Hızlandırın! İnternet Vitrininde Tecrübemizle Şekillenen Hedef Odaklı Projeler!</span>
                                <Link to={process.env.PUBLIC_URL + "/iletisim"} className="axil-btn btn-fill-primary btn-large">İletişim</Link>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <AnimationOnScroll animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                <div className="large-thumb">
                                    <img src={process.env.PUBLIC_URL + "/images/banner/website-theme.png"} alt="Laptop" />
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="slideInRight" duration={2} delay={300} animateOnce={true}>
                            {/* <div className="large-thumb-2">
                                <img src={process.env.PUBLIC_URL + "/images/banner/video.png"} alt="Laptop" />
                            </div> */}
                            </AnimationOnScroll>
                            <ul className="list-unstyled shape-group">
                                <li className="shape shape-1">
                                    <AnimationOnScroll animateIn="slideInLeft" duration={1} delay={800} animateOnce={true}>
                                        <img src={process.env.PUBLIC_URL + "/images/banner/chat-group.png"} alt="chat" />
                                    </AnimationOnScroll>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GMMainPageBanner;