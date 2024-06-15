import React from 'react';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import GMFooter from '../common/footer/GMFooter';
import Header from '../common/header/GMHeader';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import FormTwo from '../component/contact/FormTwo';
import GMSectionTitle from '../elements/section-title/GMSectionTitle';
import ContactLocation from '../component/contact/ContactLocation';



const Contact = () => {
    return (
        <>
            <SEO title="İletişim" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BreadCrumbOne 
                title="İletişim"
                page="İletişim"
                />

            <div className="section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6">
                            <div className="contact-form-box shadow-box mb--30">
                                <h3 className="title">Projeniz hakkında konuşalım</h3>
                                <FormTwo />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 offset-xl-1">
                            <div className="contact-info mb--100 mb_md--30 mt_md--0 mt--150">
                                <h4 className="title">Telefon</h4>
                                <p>Telefonlara mümkün olduğunca cevap vermeye çalışıyoruz :)</p>
                                <h4 className="phone-number"><a href="tel:+905330323217">0 (533) 032 3217</a></h4>
                            </div>
                            <div className="contact-info mb--30">
                                <h4 className="title">Eposta</h4>
                                <p>Her konuda bize yazabilirsiniz. Epostalarınıza maksimum 24 saat içerisinde dönüş yapıyoruz.</p>
                                <h4 className="phone-number"><a href="mailto:baris@gunduzmedya.com">baris@gunduzmedya.com</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-unstyled shape-group-12">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="Bubble" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="Bubble" /></li>
                    <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} alt="Circle" /></li>
                </ul>
            </div>

            <div className="section section-padding bg-color-dark overflow-hidden">
                <div className="container">
                    <GMSectionTitle 
                        subtitle="Gündüz Medya"
                        title="Ofislerimiz"
                        description=""
                        textAlignment="heading-light-left"
                        textColor=""
                    />
                    <div className="row">
                        <ContactLocation />
                    </div>
                </div>
                <ul className="shape-group-11 list-unstyled">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-6.png"} alt="line" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} alt="line" /></li>
                </ul>
            </div>

            <GMFooter parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" />
            </main>
        </>
    )
}

export default Contact;