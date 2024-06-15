import React from 'react';
import GMHeader from '../common/header/GMHeader';
import GMMainPageBanner from '../component/banner/GMMainPageBanner';
import GMSectionTitle from '../elements/section-title/GMSectionTitle';
import GMServices from '../component/service/GMServices';
import GMAbout from '../component/about/GMAbout';
import GMProjects from '../component/project/GMProjects';
import GMPartners from '../component/brand/GMPartners';
import GMBlog from '../component/blog/GMBlog';
import GMFooter from '../common/footer/GMFooter';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';

const GMHomePage = () => {

    return (
        <>
            <ColorSwitcher />
            <main className="main-wrapper">
                <GMHeader />
                <GMMainPageBanner />
                <div className="section section-padding-2 bg-color-dark">
                    <div className="container">
                        <GMSectionTitle
                            subtitle="Hizmetlerimiz"
                            title="Dijital Ürünler Tasarlıyor ve Geliştiriyoruz"
                            description="10 yılın ve 100'den fazla ürünün ardından, ekibimiz sizi etkileyici sonuçlarla buluşturan yazılım geliştirme hizmetleri sunmaya hazır. Hayal ettiğiniz her türlü projeyi bizimle gerçekleştirebilirsiniz!"
                            textAlignment="heading-light-left"
                            textColor=""
                        />
                        <div className='row'>
                            <GMServices colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="6" />
                        </div>
                    </div>
                    <ul className="list-unstyled shape-group-10">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"} alt="Circle" /></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"} alt="Circle" /></li>
                    </ul>
                </div>
                <GMAbout />
                <GMProjects />
                <GMPartners />
                <GMBlog />
                <GMFooter parentClass="" />
            </main>
        </>
    )
}

export default GMHomePage;

