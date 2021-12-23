import Dialog from "./components/Dialog";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import './main.scss'

function App() {
  return (
    <div className='container content'>
        <Dialog/>
        <Messages/>
        <Profile/>
    </div>
  );
}

export default App;
