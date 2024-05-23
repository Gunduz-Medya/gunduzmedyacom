import React from 'react'
import PropTypes from "prop-types";


const SEO = ( {title, description} ) => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>Gündüz Medya | {title}</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="Gündüz Medya Websitesi" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
};

export default SEO;