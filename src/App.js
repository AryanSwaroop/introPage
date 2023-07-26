import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import './components/comp.css'
import BelowNav from './components/belowNavbar';
import Profile from './components/pictureProfile';
import Page from './components/aboutPage';
import ProjectPage from './components/projectsPast';




function App() {
  return (
    <div className="App">
      <Navbar />
      <BelowNav />
      
      <Page />
      <ProjectPage />
      
      
    </div>
  );
}

export default App;
