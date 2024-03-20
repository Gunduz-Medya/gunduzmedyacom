import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const PrivacyPolicy = () => {

    return (
        <>
            <SEO title="Privacy Policy" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Gizlilik Politikası"
                page="Gizlilik Politikası"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                <div className="section-title">
                                    <h5 className="title">Gizlilik politikası 20 Mart 2024 tarihinde hazırlanmıştır.</h5>
                                </div>
                                <p>Gündüz Medya, müşteri gizliliğini korumaya büyük önem verir. Bu gizlilik politikası, web sitemizi ziyaret edenlerin kişisel bilgilerinin toplanması, kullanılması ve ifşa edilmesi hakkında bilgi vermektedir.</p>
                                <h4>Kişisel Bilgilerin Toplanması ve Kullanılması</h4>
                                <p>Web sitemizi ziyaret ettiğinizde, belirli kişisel bilgileri (ad, e-posta adresi, telefon numarası vb.) bize sağlayabilirsiniz. Bu bilgiler, hizmetlerimizle ilgili taleplerinizi işlemek, sizinle iletişim kurmak veya size daha iyi hizmet sunmak için kullanılabilir.</p>
                                <h4>Çerezler</h4>
                                <p>Web sitemizi ziyaret ettiğinizde, tarayıcınıza bir çerez yerleştirebiliriz. Çerezler, web tarayıcınızın belirli bilgileri saklamasına ve tanımasına olanak tanır. Bu bilgiler, tercihlerinizi hatırlamak ve web sitemizin performansını ve kullanıcı deneyimini iyileştirmek için kullanılabilir.</p>
                                <h4>Bilgilerin Paylaşılması</h4>
                                <p>Kişisel bilgileriniz, yasal gereklilikler veya şirket politikalarına uyum sağlama amaçlarıyla üçüncü taraflarla paylaşılabilir. Ancak, müşteri gizliliğini koruma taahhüdümüzü göz önünde bulundurarak, bilgilerinizi başka amaçlar için satmayacağız, kiralamayacağız veya değiş tokuş etmeyeceğiz.</p>   
                                <h4>Güvenlik</h4>
                                <p>Kişisel bilgilerinizin güvenliği bizim için önemlidir, bu nedenle uygun güvenlik önlemlerini alırız. Ancak, internet üzerinden iletilen verilerin tam güvenliği garanti edilemez. Bu nedenle, kişisel bilgilerinizi web sitemize gönderirken dikkatli olmanızı öneririz.</p>
                                <h4>Gizlilik Politikası Değişiklikleri</h4>
                                <p>Bu gizlilik politikası, herhangi bir zamanda değiştirilebilir. Değişiklikler web sitemizde yayınlanacak ve değişikliklerin yürürlüğe girdiği tarihte yürürlüğe girecektir.</p>
                                <h4>İletişim</h4>
                                <p>Gizlilik politikamızla ilgili sorularınız veya endişeleriniz varsa, lütfen bizimle iletişime geçmekten çekinmeyin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CtaLayoutOne />
            <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default PrivacyPolicy;