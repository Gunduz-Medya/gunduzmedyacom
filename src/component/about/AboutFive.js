import React from 'react';
import { Link } from 'react-router-dom';


const AboutFive = () => {
    return (
      <div className="section-padding-equal">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="about-team">
                    <div className="thumbnail">
                        <img src={process.env.PUBLIC_URL + "/images/hakkimizda/ileri-teknoloji-cozumlerimiz.jpg"} alt="thumbnail" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-team">
                    <div className="section-heading heading-left">
                        <span className="subtitle">Kusursuz Ürünler</span>
                        <h2>İleri Teknoloji Çözümleriyle Desteklenen Projelerimiz</h2>  
                        <p>Yıllar geçtikçe farklı dinamiklere ve zorluklara sahip onlarca sektörde yüzlerce ürün geliştirdik. Ve muhtemelen sizinkinde de büyük başarılara imza attık!</p>
                        <Link to={process.env.PUBLIC_URL + "/projeler"} className="axil-btn btn-large btn-fill-primary">Projelerimiz</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive;