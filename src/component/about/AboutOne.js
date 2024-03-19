import React from 'react';
import FormOne from '../contact/FormOne';


const AboutOne = () => {
    return (
        <section className="section section-padding-equal bg-color-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">Hakkımızda</span>
                                <h2 className="title mb--40">Tasarlıyor, geliştiriyor ve üretiyoruz.</h2>
                                <p>Eğlence yaratıcılığı doğurur. Ve yaratıcılık dudak uçuklatan ürünleri doğurur. Bu nedenle, sıkı çalışmamızın bizi gururlandırmasını sağlamak için eğlenceyi işimizin hayati bir parçası haline getiriyoruz.</p>
                                <p>Herkesi içgüdülerine güvenmeye ve açıkça rahatça konuşabilmeye teşvik ediyoruz. Çünkü burada hiyerarşi yok. Her ses duyulur ve en iyi fikir kazanır.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box">
                            <h3 className="title">Bizimle İletişime Geçin</h3>
                           <FormOne />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="line" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="line" /></li>
            </ul>
        </section>
    )
}

export default AboutOne;