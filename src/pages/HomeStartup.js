import React from 'react';
import GMFooter from '../common/footer/GMFooter';
import HeaderOne from '../common/header/GMHeaderOne';
import SEO from '../common/SEO';
import BannerFour from '../component/banner/BannerFour';
import BlogOne from '../component/blog/BlogOne';
import BrandOne from '../component/brand/BrandOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectFour from '../component/project/ProjectFour';
import TestimonialOne from '../component/testimonial/TestimonialOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';

const HomeStartup = () => {

    return (
        <>
        <SEO title="Home Startup"/>
        <ColorSwitcher />
        <main className="main-wrapper">
        <HeaderOne />
        <BannerFour />
        <ProjectFour />
        <TestimonialOne />
        <BrandOne />
        <BlogOne />
        <CtaLayoutOne />
        <GMFooter />
        </main>
        </>
    )
}

export default HomeStartup;

