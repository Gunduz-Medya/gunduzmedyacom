import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaPenFancy } from 'react-icons/fa';


const AboutTwo = () => {
    return (
        <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">Gündüz Medya</span>
                                <h3 className="title">Markalaşma neden önemlidir?</h3>
                                <p>İşletmenizin DNA'sı, anlattığınız hikaye ve müşterilere verdiğiniz sözdür. Sadece bir logo veya çarpıcı bir slogan değil; hedef kitlenizle rezonans sağlayan unutulmaz ve ayırt edici bir kimlik yaratmaktır.</p>
                            </div>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaCompress /> Strateji</Accordion.Header>
                                    <Accordion.Body>
                                    Markalaşma, işletmenizin stratejik yolunu belirler ve hedef kitle, mesajlaşma ve pazarda konumlanma gibi kararları yönlendirir. Uzun vadeli hedeflerinizle uyumlu ve tutarlı olmasını sağlar.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><FaPenFancy /> Tasarım</Accordion.Header>
                                    <Accordion.Body>
                                    Logo, renkler ve tipografi gibi görsel unsurlar markanızın yüzünü oluşturur, hemen tanınmayı sağlar ve kimliğinizi iletilir. Güçlü tasarım güvenilirliği pekiştirir ve kalabalık bir pazarda dikkat çekmenize yardımcı olur.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><FaCode /> Gelişim</Accordion.Header>
                                    <Accordion.Body>
                                    Markalaşma, markanızı zaman içinde geliştirmeyi ve evrimleştirmeyi içeren sürekli bir süreçtir. Müşteri ilişkileri kurma, sadakati destekleme ve pazar ve tüketici tercihlerindeki değişikliklere uyum sağlama işine dahildir. Etkili gelişim, markanızın hedef kitlenizle ilgili ve etkileyici olmasını sağlar.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Bizimle İletişime Geçin</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;