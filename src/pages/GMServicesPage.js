import React from 'react';
import GMFooter from '../common/footer/GMFooter';
import Header from '../common/header/GMHeader';
import SplashCta from '../component/cta/SplashCta';
import ServiceProp from '../component/service/ServiceProp';
import ServiceData from "../data/service/ServiceMain.json";
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import GMSectionTitle from '../elements/section-title/GMSectionTitle';
import { slugify } from '../utils';

const allData = ServiceData;


const GMServices = () => {

    const designData = allData.filter(data => slugify(data.cate ? data.cate : "") === "design");
    const developmentData = allData.filter(data => slugify(data.cate ? data.cate : "") === "development");
    const marketingData = allData.filter(data => slugify(data.cate ? data.cate : "") === "marketing");
    const businessData = allData.filter(data => slugify(data.cate ? data.cate : "") === "business");
    const strategyData = allData.filter(data => slugify(data.cate ? data.cate : "") === "content");

    return (
        <>
            <main className="main-wrapper">
                <Header />
                <BcrumbBannerOne
                    title="Global ürünler tasarlıyor ve geliştiriyoruz"
                    paragraph="Yüzlerce ürün ve 10 yıllık tecrübeyle, tam döngülü yazılım geliştirme hizmetleri sunuyoruz."
                    styleClass=""
                    mainThumb="/images/banner/banner-thumb-4.png"
                />
                <div className="service-scroll-navigation-area">

                    <nav id="onepagenav" className="service-scroll-nav navbar onepagefixed">
                        <div className="container">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link" href="#yazilim-gelistirme">Yazılım Geliştirme</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#tasarim-hizmetleri">Tasarım Hizmetleri</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#reklam-ve-pazarlama">Reklam ve Pazarlama</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#is-gelistirme-ve-danismanligi">İş Geliştirme ve Danışmanlık</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#icerik-uretimi">İçerik Üretimi</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="section section-padding bg-color-dark" id="yazilim-gelistirme">
                        <div className="container">
                            <GMSectionTitle
                                subtitle="Hizmetlerimiz"
                                title="Yazılım Geliştirme"
                                description=""
                                textAlignment="heading-light-left"
                                textColor=""

                            />
                            <div className="row">
                                <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={developmentData} />
                            </div>
                        </div>
                    </div>

                    <div className="section section-padding" id="tasarim-hizmetleri">
                        <div className="container">
                            <GMSectionTitle
                                subtitle="Hizmetlerimiz"
                                title="Tasarım Hizmetleri"
                                description=""
                                textAlignment="heading-left"
                                textColor=""

                            />
                            <div className="row">
                                <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={designData} />
                            </div>
                        </div>
                    </div>


                    <div className="section section-padding bg-color-dark" id="reklam-ve-pazarlama">
                        <div className="container">
                            <GMSectionTitle
                                subtitle="Hizmetlerimiz"
                                title="Reklam ve Pazarlama"
                                description=""
                                textAlignment="heading-light-left"
                                textColor=""

                            />
                            <div className="row">
                                <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={marketingData} />
                            </div>
                        </div>
                    </div>

                    <div className="section section-padding" id="is-gelistirme-ve-danismanligi">
                        <div className="container">
                            <GMSectionTitle
                                subtitle="Hizmetlerimiz"
                                title="İş Geliştirme ve Danışmanlık"
                                description=""
                                textAlignment="heading-left"
                                textColor=""

                            />
                            <div className="row">
                                <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={businessData} />
                            </div>
                        </div>
                    </div>

                    <div className="section section-padding bg-color-dark" id="icerik-uretimi">
                        <div className="container">
                            <GMSectionTitle
                                subtitle="Hizmetlerimiz"
                                title="İçerik Üretimi"
                                description=""
                                textAlignment="heading-light-left"
                                textColor=""

                            />
                            <div className="row">
                                <ServiceProp colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" serviceData={strategyData} />
                            </div>
                        </div>
                    </div>
                </div>
                <SplashCta />
                <GMFooter parentClass="" />
            </main>
        </>
    )
}

export default GMServices;