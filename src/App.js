import Nav from './navigation/Nav'
import LandingPage from './landingpage/LandingPage';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSearch,faChevronRight,faChevronLeft,faPlayCircle,faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './App.css';
library.add(faUser,faSearch,faChevronRight,faChevronLeft,faPlayCircle,faChevronDown)
function App() {
  return (
    <div className="main">
      <Nav />
      <LandingPage />
    </div>
  );
}

export default App;
