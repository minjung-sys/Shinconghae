import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Greenone from './Pages/Green_one';
import Greentwo from './Pages/Green_two';
import Greenthree from './Pages/Green_tree';
import Greenfour from './Pages/Green_four';
import Greenfive from './Pages/Green_five';
import Greensix from './Pages/Green_six';
import Greenseven from './Pages/Green_seven';
import Greeneight from './Pages/Green_eight';
import Greenine from './Pages/Green_nine';
import Greenten from './Pages/Green_ten';
import Result from './Pages/Result';
import Mainpange from './Pages/Mainpage';

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/one" element = {<Greenone/>}/>
      <Route path="/two" element = {<Greentwo/>}/>
      <Route path="/three" element = {<Greenthree/>}/>
      <Route path="/four" element = {<Greenfour/>}/>
      <Route path="/five" element = {<Greenfive/>}/>
      <Route path="/six" element = {<Greensix/>}/>
      <Route path="/seven" element = {<Greenseven/>}/>
      <Route path="/eight" element = {<Greeneight/>}/>
      <Route path="/nine" element = {<Greenine/>}/>
      <Route path="/ten" element = {<Greenten/>}/>
      <Route path="/result" element = {<Result/>}/>
      <Route path="/mainpage" element={<Mainpange/>}/>
    </Routes>
  );
}

export default App;
