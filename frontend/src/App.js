import Layout from "./components/layout/layout";
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './pages/about/about';
import Skills from './pages/skills/skills';
import Projects from './pages/projects/projects';
import Certification from './pages/certification/certification';
import Education from './pages/education/education';
import Achievements from './pages/achievements/achievements';
import Internship from './pages/internship/internship';
import Activities from './pages/activities/activities';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div className='app-page'>
      <Layout/>
    </div>
  );
}

export default App;
