import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/NavBar';
import Landing from './components/Landing';
import Experiences from './pages/Experiences';
//import FadeInSection from './components/FadeInSection';
import ContactPage from './pages/Contacts';
import Projects from './pages/Projects';

// import FadeIn from 'react-fade-in';
<script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
      </header>
        <div>
          <Landing></Landing>
        </div>
      
      <Experiences />
      
      <Projects />

      <ContactPage />

      {/* <div id="linkedin-badge">
      <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="HORIZONTAL" data-vanity="nicole-martinez-52n4" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/nicole-martinez-52n4?trk=profile-badge">Nicole Martinez</a></div>
      </div> */}

    </div>
  );
}

export default App;
