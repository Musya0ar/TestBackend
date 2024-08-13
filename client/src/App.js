import NavigationBar  from './components/NavigationBar';
import "./style/landingPage.css";
import "./App.css";
import Intro from './components/Intro';
import Showcase from './components/Showcase';
import UserList from './components/DisplayUser';

function App() {
  return (
    <div>

      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar/>
        <Intro />
      </div>
      {/* End Intro section */}
      
      {/* Showcase Section */}
      <div className="showcase">
        <Showcase/>
      </div>
      {/* End Showcase Section */}
      <UserList/>
    </div>
    
  )}

export default App