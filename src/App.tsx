import './App.scss'
import {Link} from "react-router-dom";


const App = () => {

  return (
    <div>
      <div><Link to={`/`}>main</Link></div>
      <div><Link to={`register`}>registration</Link></div>
      <div><Link to={`login`}>login</Link></div>
      <div><Link to={`settings`}>Settings</Link></div>
    </div>
  )
};

export default App;
