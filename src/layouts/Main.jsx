import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import { Helmet } from "react-helmet-async";

const Main = () => {
  return (
    <div className="bg-[#1D1E23] text-yellow-600">
      <Helmet>
        <title>Arts & Cultural - Home</title>
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main