import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import WidgetCategory from './widget/WidgetCategory';
import WidgetPost from './widget/WidgetPost';

const BlogSidebar = () => {
    return (
        <div className="axil-sidebar">
            <div className="widget widget-categories">
                <h4 className="widget-title">Kategoriler</h4>
                <WidgetCategory />
            </div>
            <div className="widget widge-social-share">
                <div className="blog-share">
                    <h5 className="title">Takip:</h5>
                    <ul className="social-list list-unstyled">
                        <li><a href="https://facebook.com/"><FaFacebookF /></a></li>
                        <li><a href="https://twitter.com/"><FaXTwitter /></a></li>
                        <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                        <li><a href="https://www.linkedin.com/"><FaLinkedinIn /></a></li>
                        <li><a href="https://www.pinterest.com/"><FaPinterest /></a></li>
                        <li><a href="https://www.youtube.com/"><FaYoutube /></a></li>
                    </ul>
                </div>
            </div>
            <div className="widget widget-recent-post">
                <h4 className="widget-title">Son Yazılar</h4>
                <WidgetPost />
            </div>
            <div className="widget widget-banner-ad">
                <Link to="#">
                    <img src={process.env.PUBLIC_URL + "/images/banner/widget-banner.png"} alt="banner" />
                </Link>
            </div>
        </div>
    )
}

export default BlogSidebar;