import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';

// HomePage
import GMHomePage from './pages/GMHomePage';

// Blog Import
import BlogArchive from './pages/Archive';
import BlogDetails from './pages/BlogDetails';
import BlogGridView from './pages/BlogGrid';
import BlogCategory from './pages/Category';

// Service 
import ServiceDetails from './pages/ServiceDetails';
import ServiceOne from './pages/ServiceOne';

// Pages 
import ErrorPage from './pages/404';
import AboutUs from './pages/AboutUs';
import CaseStudy from './pages/CaseStudy';
import CaseDetails from './pages/CaseStudyDetails';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
import OurClients from './pages/OurClients';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

// Css Import
import './assets/scss/app.scss';


const App = () => {
	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path={process.env.PUBLIC_URL + "/"} element={<GMHomePage />} />

					{/* Pages  */}
					<Route path={process.env.PUBLIC_URL + "/hakkimizda"} element={<AboutUs />} />
					<Route path={process.env.PUBLIC_URL + "/projeler"} element={<CaseStudy />} />
					<Route path={process.env.PUBLIC_URL + "/proje-detayi/:slug"} element={<CaseDetails />} />
					{/* Service */}
					<Route path={process.env.PUBLIC_URL + "/hizmetler/"} element={<ServiceOne />} />
					<Route path={process.env.PUBLIC_URL + "/hizmetler/:slug"} element={<ServiceDetails />} />
					{/* Company */}
					<Route path={process.env.PUBLIC_URL + "/iletisim"} element={<Contact />} />
					<Route path={process.env.PUBLIC_URL + "/gizlilik-politikasi"} element={<PrivacyPolicy />} />
					<Route path={process.env.PUBLIC_URL + "/terms-use"} element={<TermsOfUse />} />

					<Route path={process.env.PUBLIC_URL + "*"} element={<ErrorPage />} />

					<Route path={process.env.PUBLIC_URL + "/pek-yakinda"} element={<ComingSoon />} />

					<Route path={process.env.PUBLIC_URL + "/is-ortaklarimiz"} element={<OurClients />} />

					{/* Blogs */}
					<Route path={process.env.PUBLIC_URL + "/blog/"} element={<BlogGridView />} />
					<Route path={process.env.PUBLIC_URL + "/blog/:id"} element={<BlogDetails />} />
					<Route path={process.env.PUBLIC_URL + "/kategori/:slug"} element={<BlogCategory />} />
					<Route path={process.env.PUBLIC_URL + "/arsiv/:slug"} element={<BlogArchive />} />

				</Routes>
			</ScrollToTop>
		</Router>
	)
}

export default App;
