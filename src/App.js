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
import GMServices from './pages/GMServicesPage';
import GMServiceDetails from './pages/GMServiceDetailsPage';

// Pages 
import ErrorPage from './pages/404';
import GMAboutUs from './pages/GMAboutUsPage';
import GMProjects from './pages/GMProjectsPage';
import GMProjectDetails from './pages/GMProjectDetailsPage';
import ComingSoon from './pages/ComingSoon';
import Contact from './pages/Contact';
import OurClients from './pages/OurClients';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CookiePolicy from './pages/CookiePolicy';

// Css Import
import './assets/scss/app.scss';


const App = () => {
	return (
		<Router>
			<ScrollToTop>
				<Routes>
					<Route path={process.env.PUBLIC_URL + "/"} element={<GMHomePage />} />

					{/* Pages  */}
					<Route path={process.env.PUBLIC_URL + "/hakkimizda"} element={<GMAboutUs />} />
					{/* Service */}
					<Route path={process.env.PUBLIC_URL + "/hizmetler/"} element={<GMServices />} />
					<Route path={process.env.PUBLIC_URL + "/hizmetler/:slug"} element={<GMServiceDetails />} />

					<Route path={process.env.PUBLIC_URL + "/projeler"} element={<GMProjects />} />
					<Route path={process.env.PUBLIC_URL + "/proje-detayi/:slug"} element={<GMProjectDetails />} />

					{/* Company */}
					<Route path={process.env.PUBLIC_URL + "/iletisim"} element={<Contact />} />
					<Route path={process.env.PUBLIC_URL + "/gizlilik-politikasi"} element={<PrivacyPolicy />} />
					<Route path={process.env.PUBLIC_URL + "/sartlar-ve-kosullar"} element={<TermsOfUse />} />
					<Route path={process.env.PUBLIC_URL + "/cerez-politikasi"} element={<CookiePolicy />} />
					<Route path={process.env.PUBLIC_URL + "/is-ortaklarimiz"} element={<OurClients />} />

					{/* Blogs */}
					<Route path={process.env.PUBLIC_URL + "/blog/"} element={<BlogGridView />} />
					<Route path={process.env.PUBLIC_URL + "/blog/:id"} element={<BlogDetails />} />
					<Route path={process.env.PUBLIC_URL + "/kategori/:slug"} element={<BlogCategory />} />
					<Route path={process.env.PUBLIC_URL + "/arsiv/:slug"} element={<BlogArchive />} />

					<Route path={process.env.PUBLIC_URL + "/pek-yakinda"} element={<ComingSoon />} />
					<Route path={process.env.PUBLIC_URL + "*"} element={<ErrorPage />} />
				</Routes>
			</ScrollToTop>
		</Router>
	)
}

export default App;
