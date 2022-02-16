import Messages from "./components/Messages";
import Profile from "./components/Profile";
import './main.scss'
import Contact from "./components/Contact";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container content'>
        <Contact/>
          <Routes>
            <Route path="/:_id" element={<Messages/>}/>
          </Routes>
        <Profile/>
    </div>
  );
}

export default App;
