import React from 'react';
import GMFooter from '../common/footer/GMFooter';
import Header from '../common/header/GMHeader';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import BrandItem from '../component/brand/BrandItem';

const OurClients = () => {

    return (
        <>
        <SEO title="Our Clients" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BcrumbBannerOne 
                title="Our Clients"
                paragraph ="We work closely with our clients in order to deliver the best results"
                styleClass="thumbnail-2"
                mainThumb="/images/banner/banner-thumb-2.png"
                />
                <div className="section brand-wrap-area bg-color-dark">
                    <div className="container">
                        <div className='row'>
                        <BrandItem />
                        </div>
                    </div>
                </div>
                <CtaLayoutOne />
                <GMFooter parentClass="" />
            </main>
        </>
    )
}

export default OurClients;