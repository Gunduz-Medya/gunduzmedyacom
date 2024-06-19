import React from 'react';
import GMFooter from '../common/footer/GMFooter';
import Header from '../common/header/GMHeader';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const CookiePolicy = () => {

    return (
        <>
            <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BreadCrumbOne
                    title="Çerez Politikası"
                    page="Çerez Politikası"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                    <p>Gündüz Medya ("Şirket", "biz", "bizim", "bize"), www.gunduzmedya.com ("Site") adresindeki internet sitemizi ziyaret ettiğinizde, deneyiminizi geliştirmek ve sunduğumuz hizmetleri optimize etmek amacıyla çerezler kullanır. Bu Çerez Politikası, çerezlerin ne olduğunu, nasıl kullandığımızı ve çerezleri nasıl kontrol edebileceğinizi açıklamaktadır.</p>
                                    <h4>Çerez Nedir?</h4>
                                    <p>Çerezler, internet tarayıcınız tarafından bilgisayarınıza veya mobil cihazınıza depolanan küçük metin dosyalarıdır. Çerezler, bir web sitesinin sizi tanımasına ve tercihleriniz ile önceki aktiviteleriniz hakkında bilgi saklamasına olanak tanır. Bu sayede, siteyi her ziyaret ettiğinizde bilgilerinizi yeniden girmeniz gerekmez.</p>
                                    <h4>Kullandığımız Çerez Türleri</h4>
                                    <p>Sitemizde çeşitli türde çerezler kullanıyoruz:</p>
                                    <ul>
                                        <li>Gerekli Çerezler: Bu çerezler, sitemizin temel işlevlerini yerine getirmesi için gereklidir. Örneğin, oturum açma bilgilerinizi hatırlamak ve alışveriş sepetinizi yönetmek için kullanılır.</li>
                                        <li>Performans Çerezleri: Bu çerezler, sitemizi nasıl kullandığınızı anlamamıza yardımcı olur. Ziyaretçi trafiğini analiz eder ve sitemizin performansını iyileştirmemizi sağlar.</li>
                                        <li>Fonksiyonel Çerezler: Bu çerezler, sitemizin işlevselliğini ve kişiselleştirmesini artırır. Örneğin, dil tercihlerinizi veya coğrafi konumunuzu hatırlayabilir.</li>
                                        <li>Reklam Çerezleri: Bu çerezler, ilgi alanlarınıza uygun reklamlar sunmamıza yardımcı olur. Ayrıca, reklam kampanyalarımızın etkinliğini ölçmemizi sağlar.</li>
                                    </ul>
                                    <h4>Çerezlerin Kullanım Amaçları</h4>
                                    <p>Çerezleri şu amaçlarla kullanıyoruz:</p>
                                    <ul>
                                        <li>Sitemizin düzgün çalışmasını sağlamak.</li>
                                        <li>Ziyaretçi deneyimini geliştirmek ve kişiselleştirmek.</li>
                                        <li>Ziyaretçi trafiğini ve kullanım istatistiklerini analiz etmek.</li>
                                        <li>Pazarlama ve reklam faaliyetlerimizi yönetmek ve optimize etmek.</li>
                                    </ul>
                                    <h4>Çerezlerin Yönetimi</h4>
                                    <p>Çerezleri tarayıcı ayarlarınızı değiştirerek yönetebilir veya silebilirsiniz. Çoğu tarayıcı, çerezleri kabul etme veya reddetme ve mevcut çerezleri silme seçeneklerini sunar. Çerez ayarlarınızı nasıl değiştireceğiniz hakkında daha fazla bilgi edinmek için tarayıcınızın yardım menüsüne başvurabilirsiniz. Ancak, çerezleri devre dışı bırakmanın, sitemizin bazı işlevselliklerini etkileyebileceğini unutmayın.</p>
                                    <h4>Üçüncü Taraf Çerezleri</h4>
                                    <p>Sitemizde üçüncü taraf çerezler de kullanılabilir. Bu çerezler, üçüncü taraf hizmet sağlayıcıları tarafından yerleştirilir ve kontrol edilir. Üçüncü taraf çerezlerinin kullanımı hakkında daha fazla bilgi almak için bu üçüncü tarafların gizlilik politikalarına başvurabilirsiniz.</p>
                                    <h4>İletişim</h4>
                                    <p>Bu Çerez Politikası hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:</p>
                                    <ul>
                                        <li>E-posta: baris@gunduzmedya.com</li>
                                        <li>Adres: İstanbul</li>
                                    </ul>
                                    <h4>Güncellemeler</h4>
                                    <p>Bu Çerez Politikası, zaman zaman güncellenebilir. Herhangi bir değişiklik yapıldığında, güncellenmiş politikayı sitemizde yayınlayacağız. Çerez Politikamızdaki değişikliklerden haberdar olmak için periyodik olarak bu sayfayı kontrol etmenizi öneririz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <GMFooter parentClass="" />
            </main>
        </>
    )
}

export default CookiePolicy;