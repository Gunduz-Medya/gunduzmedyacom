import React from 'react';

const Data = [
    {
        image: "/images/partners/adobe-logo.svg"
    },
    {
        image: "/images/partners/atlassian-logo.svg"
    },
    {
        image: "/images/partners/canva-logo.svg"
    },
    {
        image: "/images/partners/digitalocean-logo.svg"
    },
    {
        image: "/images/partners/figma-logo.svg"
    },
    {
        image: "/images/partners/google-cloud-logo.svg"
    },
    {
        image: "/images/partners/GMGpt-logo.svg"
    },
    {
        image: "/images/partners/jetbrains-logo.svg"
    }
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={process.env.PUBLIC_URL + data.image} alt="Brand" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;