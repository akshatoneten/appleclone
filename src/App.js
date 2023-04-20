import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mainheader from "./component/Mainheader";
import Home from "./component/Home";
import Store from "./component/Store";
import Mac from "./component/Mac";
import Ipad from "./component/Ipad";
import Iphone from "./component/Iphone";
import Watch from "./component/Watch";
import Airpods from "./component/Airpods";
import Tvhome from "./component/Tvhome";
import Entertainment from "./component/Entertainment";
import Accessories from "./component/Accessories";
import Support from "./component/Support";
import Notfound from "./component/Notfound";



function App() {
  return (
    <div>



      <Routes>
        <Route path="/" element={<Mainheader />}>
          <Route index element={<Home/>}></Route>
          <Route path="/Store" element={<Store/>}></Route>
          <Route path="Mac" element={<Mac/>}></Route>
          <Route path="/Ipad" element={<Ipad/>}></Route>
          <Route path="Iphone" element={<Iphone/>}></Route>
          <Route path="/Watch" element={<Watch/>}></Route>
          <Route path="/Airpods" element={<Airpods/>}></Route>
          <Route path="/Tvhome" element={<Tvhome/>}></Route>
          <Route path="/Entertainment" element={<Entertainment/>}></Route>
          <Route path="Accessories" element={<Accessories/>}></Route>
          <Route path="/Support" element={<Support/>}></Route>
          <Route path="*" element={<Notfound/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
