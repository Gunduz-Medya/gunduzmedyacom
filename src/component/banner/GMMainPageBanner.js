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

                                <h1 className="title">Dijital Medya Uygulamaları.</h1>
                                <span className="subtitle">Deneyimli Ürün Geliştirme Ekibimizle Projelerinizi Hızlandırın! İnternet Vitrininde Tecrübemizle Şekillenen Hedef Odaklı Projeler!</span>
                                <Link to={process.env.PUBLIC_URL + "/iletisim"} className="axil-btn btn-fill-primary btn-large">İletişim</Link>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-thumbnail">
                            <AnimationOnScroll animateIn="zoomIn" duration={2} delay={300} animateOnce={true}>
                                <div className="large-thumb">
                                    <img src={process.env.PUBLIC_URL + "/images/banner/gunduz-medya-dijital-medya-uygulamalari.svg"} alt="Laptop" />
                                </div>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="slideInRight" duration={2} delay={300} animateOnce={true}>
                            {/* <div className="large-thumb-2">
                                <img src={process.env.PUBLIC_URL + "/images/banner/video.png"} alt="Laptop" />
                            </div> */}
                            </AnimationOnScroll>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GMMainPageBanner;