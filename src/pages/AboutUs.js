import React from 'react';
import SEO from '../common/SEO';
import GMFooter from '../common/footer/GMFooter';
import Header from '../common/header/GMHeader';
import AboutFive from '../component/about/AboutFive';
import AboutFour from '../component/about/AboutFour';
import AboutThree from '../component/about/AboutThree';
import ProcessOne from '../component/process/ProcessOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const AboutUs = () => {

    return (
        <>
            <SEO title="Hakkımızda" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BcrumbBannerOne
                    title="Eğlence yaratıcılığı teşvik eder."
                    paragraph="Farklı geçmişlere sahip, dinamik ve hırslı bireylerden oluşan sıkı bağlı bir grup olarak, yapmamız gereken her işte en iyisi olma isteğimiz bizi bir arada tutan bağdır."
                />
                <AboutFour />
                <AboutThree />
                <AboutFive />
                <ProcessOne />
               {/*  <CtaLayoutOne /> */}
                <GMFooter parentClass="" />
            </main>
        </>
    )
}

export default AboutUs;