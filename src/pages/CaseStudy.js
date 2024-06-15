import React from 'react';
import GMFooter from '../common/footer/GMFooter';
import Header from '../common/header/GMHeader';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import CaseStudyProp from '../component/casestudy/CaseStudyProp';


const CaseStudy = () => {

    return (
        <>
        <SEO title="Case Study" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BcrumbBannerOne 
                title="Projelerimiz"
                paragraph ="İnternette olmaktan keyif aldığımız her an, üretmekten keyif aldığımız projeler geliştiriyoruz."
                styleClass="thumbnail-3"
                mainThumb="/images/banner/banner-thumb-5.png"
                />
                <div className="pt--250 pt_lg--200 pt_md--100 pt_sm--80 case-study-page-area">
                    <div className="container">
                        <CaseStudyProp />
                    </div>
                </div>
                <CtaLayoutOne />
                <GMFooter parentClass="" />
            </main>
        </>
    )
}

export default CaseStudy;