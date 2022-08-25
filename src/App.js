// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import RecordList from "./components/recordList";
import Signin from "./signup";
import { TermsAndCond } from "./pages/termcond";
import { AboutDisablility } from "./pages/about";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <BottomNav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/record" element={<RecordList />} />
          <Route path="/signin/" element={<Signin/>}/>
          <Route path="/terms-and-conditions/" element={<TermsAndCond/>}/>
          <Route path="/About-disablity/" element={<AboutDisablility/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
