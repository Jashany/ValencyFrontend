import { useState } from "react";
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
import AdminPortfolio from "./Admin/AdminPortfolio";
import AdminTrading from "./Admin/AdminTrading";
import { AdminSideBar } from "./Components/UI/AdminSideBar";
import SigninPage from "./Views/Signin";
import SignupPage from "./Views/Signup";
import Landing from "./Views/Landing";

function App() {
  const location = useLocation();

  return (
    <div
      className={`${
        location.pathname === "/" ||
        location.pathname === "/sign-in" ||
        location.pathname === "/sign-up"
          ? ""
          : "bg-[#181818] flex w-full h-screen"
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
          <Route path="/admin/portfolio" element={<AdminPortfolio />} />
          <Route path="/admin/trading" element={<AdminTrading />} />
        </Route>
      </Routes>
    </div>
  );
}

const LandingLayout = () => {
  return (
    <>
      <div className="bg-[#181818] block md:hidden">
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center leading-normal">
            We&apos;re Optimizing
            <br />
            for Mobile!
          </h1>
          <p className="text-gray-200 mt-2 px-5 text-center">
            Our mobile experience is in the works and will be launching soon.
          </p>
          <p className="text-gray-500 mt-2 px-8 text-center text-sm">
            (For now, please explore this website on a desktop for the full
            experience. Thank you for your patience!)
          </p>
        </div>
      </div>
      <div className="bg-[#181818] hidden md:block">
        <Outlet />
      </div>
    </>
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
      <AdminSideBar />
      <div className="w-[100%] h-[100dvh] overflow-scroll">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
