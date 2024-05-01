import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "İnsan deneyimleri önceliğimizdir",
        para: "Çarpıcı dijital ürünler oluşturmak bizim gücümüzdür. Ancak kendimizle gurur duyduğumuz şey, yetenekli ve benzer düşüncelere sahip insanları bir araya getirerek yaratıcı güçlerini serbest bırakmalarına ve açık ve güvenli bir işyerinde birleştirmelerine olanak sağlamaktır."
    },
    {
        id: 2,
        title: "Topluluğumuza bağlıyız",
        para: "Ancak başkalarını kaldırarak yükselebileceğimize inanıyoruz. İşte bu nedenle topluluğumuzdaki bağları güçlendirmek için düzenli olarak etkinlikler düzenliyor, bilgi ve deneyimlerimizi paylaşarak yeniliği ateşliyoruz."
    },
    {
        id: 3,
        title: "Eğlenceyi bir öncelik haline getirin",
        para: "Eğlence yaratıcılığı doğurur. Ve yaratıcılık dudak uçuklatan ürünleri doğurur. Bu nedenle, sıkı çalışmamızın bizi gururlandırmasını sağlamak için eğlenceyi işimizin hayati bir parçası haline getiriyoruz."
    },
    {
        id: 4,
        title: "Birbirimize güveniyoruz",
        para: "Güvenilir ürünler geliştirmek için açık iletişim ve verimli işbirliği temelinde ekip arkadaşlarımız ve müşterilerimizle güven oluşturmaya kendimizi adadık."
    },
    {
        id: 5,
        title: "Çeşitliliği kucakla",
        para: "Dünyanın her yerinden gelen yetenekleri memnuniyetle karşılayan ve herkese eşit fırsatlar sunan, çeşitlilik içeren ve kapsayıcı bir kültür oluşturmaya çalışıyoruz."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                {/* <SectionTitle 
                    subtitle="Our Valus"
                    title="Why should you work with us?"
                    description="Nulla facilisi. Nullam in magna id dolor blandit rutrum eget vulputate augue sed eu leo eget risus imperdiet."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                /> */}

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                {/* <h3 className="sl-number">{data.id}</h3> */}
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;