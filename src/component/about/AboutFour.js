import React from 'react';
import { Link } from 'react-router-dom';


const AboutFour = () => {
    return (
        <div className="section section-padding case-study-featured-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-3">
                        <div className="case-study-featured-thumb text-start">
                            <img src={process.env.PUBLIC_URL + "/images/hakkimizda/dunya-standartlarinda-urun-gelistirme.svg"} alt="travel" />
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-9">
                        <div className="case-study-featured">
                            <div className="section-heading heading-left">
                                <span className="subtitle">Misyonumuz</span>
                                <h2 className="title">Dünya standartlarında ürün geliştirme</h2>
                                <p>Firmamız, teknolojik ürün geliştirme konusunda uzmanlaşmış olup, müşteri odaklı çözümler sunar. En son teknolojileri kullanarak yenilikçi ürünler geliştirmeyi hedefler ve müşteri memnuniyetini ön planda tutarız.</p>
                                <p>Profesyonel ekibimizle, müşterilerimizin başarılarına katkıda bulunmayı amaçlarız.</p>
                                <Link to={process.env.PUBLIC_URL + "/hizmetler"} className="axil-btn btn-fill-primary btn-large">Hizmetler</Link>
                            </div>
                            {/* <div className="case-study-counterup">
                                <div className="single-counterup">
                                    <h2 className="count-number">
                                        <TrackVisibility once>
                                            {({ isVisible }) => (
                                                <span className="number count">
                                                    {isVisible ? <CountUp end="10" duration={1} /> : null}
                                                </span>
                                            )}
                                        </TrackVisibility>
                                        <span className="symbol">+</span>
                                    </h2>
                                    <span className="counter-title">Yıllık Tecrübe</span>
                                </div>
                                <div className="single-counterup">
                                    <h2 className="count-number">
                                        <TrackVisibility once>
                                            {({ isVisible }) => (
                                                <span className="number count">
                                                    {isVisible ? <CountUp end="500" duration={1} /> : null}
                                                </span>
                                            )}
                                        </TrackVisibility>
                                        <span className="symbol">+</span>
                                    </h2>
                                    <span className="counter-title">Teslim edilen proje sayısı</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutFour;