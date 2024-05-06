import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import WhyWimple from "./pages/WhyWimple";
import Solutions from "./pages/Solutions";
import CompareQuotes from "./pages/CompareQuotes";
import HelpCenter from "./pages/HelpCenter";
import TrackShipment from "./pages/TrackShipment";
import Calculator from "./pages/Calculator";
import NotFound from "./pages/NotFound";
import TermsConditions from "./pages/TermsConditions";
import Footer from "./components/Footer";
import ChatUs from "./components/ChatUs";
import QuotePage from "./pages/QuotePage";
import Payment from "./pages/Payment";

function App() {
  return (
    <div>
      <Header />
      <ChatUs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/whywimple" element={<WhyWimple />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/comparequotes" element={<CompareQuotes />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/trackshipment" element={<TrackShipment />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/termsandconditions" element={<TermsConditions />} />
        <Route path="/quotepage" element={<QuotePage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
