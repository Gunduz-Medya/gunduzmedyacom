import React from 'react';
import GMFooter from '../common/footer/GMFooter';
import Header from '../common/header/GMHeader';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const TermsOfUse = () => {

    return (
        <>
            <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BreadCrumbOne
                    title="Şartlar ve Koşullar"
                    page="Şartlar ve Koşullar"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                    <p>Gündüz Medya'ya ("Şirket", "biz", "bizim", "bize") hoş geldiniz! www.gunduzmedya.com ("Site") adresindeki internet sitemize erişerek, aşağıdaki şartlar ve koşullara ("Şartlar") uymayı ve bağlı kalmayı kabul etmiş olursunuz. Lütfen bu Şartları dikkatlice okuyun. Bu Şartları kabul etmiyorsanız, Sitemizi kullanmamalısınız.</p>
                                    <h4>Şartların Kabulü</h4>
                                    <p>Sitemize erişerek ve kullanarak, bu Şartları ve Gizlilik Politikamızı kabul etmiş olursunuz. Şartların herhangi bir kısmını kabul etmiyorsanız, Sitemizi kullanmamalısınız.</p>
                                    <h4>Şartlarda Değişiklikler</h4>
                                    <p>Gündüz Medya, bu Şartları herhangi bir zamanda değiştirme veya yenileme hakkını saklı tutar. Bu değişiklikler hakkında Sitemizde bildirimde bulunacağız. Değişikliklerin yayınlanmasının ardından Sitemizi kullanmaya devam etmeniz, bu değişiklikleri kabul ettiğiniz anlamına gelir.</p>
                                    <h4>Sitenin Kullanımı</h4>
                                    <p>Sitemizi yalnızca yasal amaçlarla ve üçüncü şahısların haklarını ihlal etmeyen veya kısıtlamayan bir şekilde kullanmayı kabul edersiniz. Şunları yapmamayı kabul edersiniz:</p>
                                    <ul>
                                        <li>Sitemizi herhangi bir yerel, ulusal veya uluslararası yasa veya düzenlemeyi ihlal edecek şekilde kullanmak.</li>
                                        <li>Gündüz Medya'ya zarar verecek, yasa dışı, dolandırıcı veya zararlı davranışlarda bulunmak.</li>
                                        <li>İstenmeyen veya yetkisiz reklam, tanıtım materyalleri, spam veya diğer talep türlerini iletmek.</li>
                                    </ul>
                                    <h4>Fikri Mülkiyet</h4>
                                    <p>Sitede görüntülenen tüm içerikler, ticari markalar, hizmet markaları, logolar ve fikri mülkiyet hakları Gündüz Medya'ya veya lisans verenlerine aittir. Gündüz Medya'nın önceden yazılı izni olmadan Siteden herhangi bir içeriği kullanamaz, çoğaltamaz veya dağıtamazsınız.</p>
                                    <h4>Sorumluluğun Sınırlandırılması</h4>
                                    <p>Kanunen izin verilen en geniş ölçüde, Gündüz Medya, dolaylı, tesadüfi, özel, netice kabilinden doğan veya cezai tazminat taleplerinden, veya kar kaybı veya gelir kaybından, doğrudan veya dolaylı olarak, veya veri kaybı, kullanım kaybı, itibar kaybı veya diğer soyut kayıplardan sorumlu tutulamaz:</p>
                                    <ul>
                                        <li>Sitemize erişiminiz veya kullanmanız veya erişememeniz veya kullanamamanız.</li>
                                        <li>Sunucularımıza yetkisiz erişim veya bunların kullanımı ve/veya bu sunucularda saklanan kişisel bilgilere yetkisiz erişim veya bunların kullanımı.</li>
                                    </ul>
                                    <h4>Tazminat</h4>
                                    <p>Gündüz Medya'yı, iştiraklerini ve bunların ilgili yöneticilerini, memurlarını, çalışanlarını ve temsilcilerini; Sitemizi kullanımınızdan, bu Şartların ihlalinden veya üçüncü şahıs haklarının ihlalinden kaynaklanan herhangi bir iddia, zarar, yükümlülük, kayıp, maliyet veya borç ve masraflardan zarar görmemesi için tazmin etmeyi ve zararını karşılamayı kabul edersiniz.</p>
                                    <h4>Geçerli Hukuk</h4>
                                    <p>Bu Şartlar, hukukun ihtilafı hükümlerine bakılmaksızın Türkiye kanunlarına göre yönetilecek ve yorumlanacaktır. Herhangi bir ihtilafın çözümü için Türkiye içinde bulunan mahkemelerin kişisel yargı yetkisine tabi olmayı kabul edersiniz.</p>
                                    <h4>İletişim</h4>
                                    <p>Bu Şartlar hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:</p>
                                    <ul>
                                        <li>E-posta: baris@gunduzmedya.com</li>
                                        <li>Adres: İstanbul</li>
                                    </ul>
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

export default TermsOfUse;