import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import EventDetails from "./pages/EventDetails";
import RestrictNavigation from "./components/auth/RestrictNavigation";
import AuthRoute from "./components/auth/AuthRoute";
import Cookies from 'universal-cookie'
function App() {
   const cookies = new Cookies();
  const token = cookies.get('token');
  const AuthSignin = RestrictNavigation(Signin);
  const AuthSignup = RestrictNavigation(Signup);
  const AuthEvents = AuthRoute(Events);
  const AuthEventDetails = AuthRoute(EventDetails);
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<AuthSignin />} />
        <Route path="/events" element={<AuthEvents />} />
        <Route path="/signup" element={<AuthSignup />} />
        <Route path="/event/:id" element={<AuthEventDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
