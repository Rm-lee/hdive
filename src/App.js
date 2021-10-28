import Nav from './navigation/Nav'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
import './App.css';
library.add(faUser,faSearch)
function App() {
  return (
    <div className="main">
      <Nav />
    </div>
  );
}

export default App;
