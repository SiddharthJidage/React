import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./Pages/Home";
import PageNotFoud from "./Pages/PageNotFoud";
import About from "./Pages/About";
import GithubContext from "./context/github/GithubContext";

function App() {
  return (
    <GithubContext>
    <Router >
        <div className=" flex flex-col justify-between h-screen">
          <Navbar/>
          <main className="container mx-auto px-3 pb-12">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/notfound" element={<PageNotFoud/>}/>
              <Route path="/*" element={<PageNotFoud/>}/>
            </Routes>
            
            </main>
          <Footer/>
        </div>
    </Router>
    </GithubContext>
  );
}

export default App;
