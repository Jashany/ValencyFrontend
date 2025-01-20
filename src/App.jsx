import "./App.css";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Components/UI/Sidebar";
import { Header } from "./Components/UI/Header";
import EnergyDetails from "./Views/EnergyDetails";
import Home from "./Views/Home";
import SellDashboard from "./Views/SellDashboard";
import BuyDashboard from "./Views/BuyDashboard";
import AdminHome from "./Admin/AdminHome";
import AdminGrid from "./Admin/AdminGrid";
import Landing from "./Views/Landing";
import SigninPage from "./Views/Signin";
import SignupPage from "./Views/Signup";

function App() {
  const location = useLocation();

  return (
    <div
      className={`${
        location.pathname === "/" ||
        location.pathname === "/sign-in" ||
        location.pathname === "/sign-up"
          ? ""
          : "bg-[#171717] flex w-full h-screen"
      }`}
    >
      <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SigninPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/dashboard/buy" element={<BuyDashboard />} />
          <Route path="/dashboard/sell" element={<SellDashboard />} />
          <Route path="/energy" element={<EnergyDetails />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/" element={<AdminHome />} />
          <Route path="/admin/grid" element={<AdminGrid />} />
        </Route>
      </Routes>
    </div>
  );
}

const LandingLayout = () => {
  return (
    <div className="bg-[#171717]">
      <Outlet />
    </div>
  );
};

const Layout = () => {
  return (
    <div className="flex flex-grow">
      <Sidebar />
      <div className="w-[100%] h-[100dvh] overflow-scroll">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

const AdminLayout = () => {
  return (
    <div className="flex flex-grow">
      <Sidebar />
      <div className="w-[100%] h-[100dvh] overflow-scroll">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
