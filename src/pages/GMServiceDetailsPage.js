import React from 'react';
import { useParams } from 'react-router-dom';
import Tilty from 'react-tilty';
import GMFooter from '../common/footer/GMFooter';
import Header from '../common/header/GMHeader';
import AboutTwo from '../component/about/AboutTwo';
import ProjectPropOne from '../component/project/itemProp/ProjectPropOne';
import ProjectData from "../data/project/ProjectData.json";
import ServiceData from "../data/service/ServiceMain.json";
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import GMSectionTitle from '../elements/section-title/GMSectionTitle';
import { slugify } from '../utils';

const allServiceData = ServiceData;
const getProjectData = ProjectData;

const GMServiceDetails = () => {

    const params = useParams();
    const serviceSlug = params.slug;

    const getServiceData = allServiceData.filter(data => slugify(data.url) === serviceSlug);
    const detailsService = getServiceData[0];

    return (
        <>
            <main className="main-wrapper">
                <Header />
                <BcrumbBannerOne
                    title={detailsService.title}
                    paragraph={detailsService.description}
                    styleClass=""
                    mainThumb=""
                />
                <AboutTwo />

                <div className="section section-padding bg-color-light pb--70">
                    <GMSectionTitle
                        subtitle={detailsService.process.sectionSub}
                        title={detailsService.process.sectionTitle}
                        description={detailsService.process.para}
                        textAlignment=""
                        textColor="mb--90"
                    />
                    <div className="container">
                        {detailsService.process.steps.map((data, index) => (
                            <div key={index} className={`process-work ${(index % 2 === 1) ? "content-reverse" : ""}`}>
                                {/*<Tilty perspective={2000} className="serviceThumb">*/}
                                {/*    <div className="thumbnail">*/}
                                {/*        <img src={process.env.PUBLIC_URL + data.thumb} alt="Thumbnail" />*/}
                                {/*    </div>*/}
                                {/*</Tilty>*/}
                                <div className="content">
                                    <span className="subtitle">{data.subtitle}</span>
                                    <h3 className="title">{data.title}</h3>
                                    <p>{data.paragraph}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ul className="shape-group-17 list-unstyled">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-24.png"} alt="Bubble" /></li>
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-23.png"} alt="Bubble" /></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
                        <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="Line" /></li>
                        <li className="shape shape-5"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="Line" /></li>
                        <li className="shape shape-6"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="Line" /></li>
                    </ul>
                </div>
                <div className="section section-padding">
                    <div className="container">
                        <GMSectionTitle
                            subtitle="Projeler"
                            title="Sizler için seçtiklerimiz"
                            description=""
                            textAlignment=""
                            textColor=""
                        />
                        <div className="row row-35">
                            {getProjectData.slice(0, 2).map((data) => (
                                <div className="col-md-6" key={data.id}>
                                    <ProjectPropOne projectStyle="" portfolio={data} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <ul className="shape-group-16 list-unstyled">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-2.png"} alt="circle" /></li>
                        <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Line" /></li>
                    </ul>
                </div>
                <GMFooter parentClass="" />
            </main>
        </>
    )
}

export default GMServiceDetails;