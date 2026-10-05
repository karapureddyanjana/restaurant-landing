import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import OrderOnline from "./pages/OrderOnline";
import About from "./pages/About";
import Reservation from "./pages/Reservation";
import ConfirmReservation from "./pages/ConfirmReservation";
import ReservationConfirmed from "./pages/ReservationConfirmed";
import CancelReservation from "./pages/CancelReservation";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";

function Shell() {
  const { pathname } = useLocation();
  const bare =
    pathname.startsWith("/reservation/confirm") || pathname === "/login";
  return (
    <div className="min-h-screen bg-white text-espresso">
      {!bare && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<OrderOnline />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/reservation/confirm" element={<ConfirmReservation />} />
          <Route path="/reservation/confirmed" element={<ReservationConfirmed />} />
          <Route path="/reservation/cancel" element={<CancelReservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </main>
      {!bare && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
