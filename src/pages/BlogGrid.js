import React from 'react';
import SEO from '../common/SEO';
import GMFooter from '../common/footer/GMFooter';
import Header from '../common/header/GMHeader';
import BlogGridOne from '../component/blog/BlogGridOne';
import BlogSidebar from '../component/blog/BlogSidebar';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';


const BlogGridView = () => {

    return (
        <>
            <SEO title="Blog Grid" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BreadCrumbOne 
                title="Blog"
                page="Blog"
                />
                <div className="section-padding-equal">
                    <div className="container">
                       <div className="row row-40">
                            <div className="col-lg-8">
                                <BlogGridOne />
                            </div>
                            <div className="col-lg-4">
                                <BlogSidebar />
                            </div>
                       </div>
                    </div>
                </div>
            <GMFooter parentClass="" />
            </main>
        </>
    )
}

export default BlogGridView;