import HomePage from './components/Home/Index';
import Header from './shared/ui/headers/Header';
import Footer from './shared/ui/footers/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from './components/error/Error';
import Career from './components/career/Career';
import Blogs from './components/blogs/Blogs';
import DisasterInsurance from './components/disaster-Insurance/DisasterInsurance';
import Event from './components/events&news/Event';
import DefenceIntelligence from './components/defence-intelligence/DefenceIntelligence';
import ImagingCapabilities from './components/imaging-capabilities/ImagingCapabilities';
import AboutUs from './components/about-us/AboutUs';
import ImageLibrary from './components/image-library/ImageLibrary';
// import DetailEvent from './components/read-event/DetailEvent';
// import DetailBlog from './components/read-event/DetailBlog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/career" element={<Career />} />
          <Route path="/blogs" element={<Blogs />} />
          {/* <Route path="/blogs/:id" element={<DetailBlog />} /> */}
          <Route path="/defence-intelligence" element={<DefenceIntelligence />} />
          <Route path="/disaster-insurance" element={<DisasterInsurance />} />
          <Route path='/imaging-capabilities/' element={<ImagingCapabilities />} />
          <Route path="/image-library" element={<ImageLibrary />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/event-news" element={<Event />} />
          {/* <Route path="/event-news/:id" element={<DetailEvent />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
