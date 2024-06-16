import React from 'react';
import GMSectionTitle from '../../elements/section-title/GMSectionTitle';
import BrandItem from './BrandItem';


const GMPartners = () => {
    return (
        <div className="section section-padding-2 bg-color-dark">
        <div className="container">
            <GMSectionTitle 
                subtitle="İş Birliklerimiz"
                title="Profesyonellerle çalışıyoruz..."
                description="Fikirleri projelendirme süreçlerinde müşterilerimizle en uygun yapıyı en doğru araçlarla kuruyoruz."
                textAlignment="heading-light-left"
                textColor=""
            />
            <div className='row'>
               <BrandItem />
            </div>
        </div>
        <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-9.png"} alt="Circle" /></li>
        </ul>
    </div>
    )
}

export default GMPartners;