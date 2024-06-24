import React from 'react';
import { Link } from 'react-router-dom';
import GMFooter from '../common/footer/GMFooter';
import GMHeader from '../common/header/GMHeader';
import GMAbout from '../component/about/GMAbout';
import GMMainPageBanner from '../component/banner/GMMainPageBanner';
import GMPartners from '../component/brand/GMPartners';
import GMProjects from '../component/project/GMProjects';
import GMServices from '../component/service/GMServices';
import GMSectionTitle from '../elements/section-title/GMSectionTitle';

const GMHomePage = () => {

    return (
        <>
            <main className="main-wrapper">
                <GMHeader />
                <GMMainPageBanner />
                <div className="section section-padding-2 bg-color-dark">
                    <div className="container">
                        <GMSectionTitle
                            subtitle="Hizmetlerimiz"
                            title="Dijital Ürünler Tasarlıyor ve Geliştiriyoruz"
                            description="10 yılın ve 100'den fazla ürünün ardından, ekibimiz sizi etkileyici sonuçlarla buluşturan yazılım geliştirme hizmetleri sunmaya hazır. Hayal ettiğiniz her türlü projeyi bizimle gerçekleştirebilirsiniz!"
                            textAlignment="heading-light"
                            textColor=""
                        />
                        <div className='row'>
                            <GMServices colSize="col-xl-4 col-md-6" serviceStyle="" itemShow="6" />
                            <div className='text-center'>
                                <Link to={process.env.PUBLIC_URL + "/hizmetler"} className="axil-btn btn-fill-primary btn-large">Tüm Hizmetlerimiz</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <GMAbout />
                <GMProjects />
                <GMPartners />
               {/*  <GMBlog /> */}
                <GMFooter parentClass="" />
            </main>
        </>
    )
}

export default GMHomePage;

