import Messages from "./components/Messages";
import Profile from "./components/Profile";
import './main.scss'
import Contact from "./components/Contact";

function App() {
  return (
    <div className='container content'>
        <Contact/>
        <Messages/>
        <Profile/>
    </div>
  );
}

export default App;
