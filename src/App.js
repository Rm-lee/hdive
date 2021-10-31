import Nav from './navigation/Nav'
import LandingPage from './landingpage/LandingPage';
import Footer from './footer/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSearch,faSignOutAlt,faChevronRight,faChevronLeft,faPlayCircle,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './App.css';
library.add(faUser,faSearch,faSignOutAlt,faChevronRight,faChevronLeft,faPlayCircle,faChevronDown)
function App() {
  return (
    <div className="main">
      <Nav />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
