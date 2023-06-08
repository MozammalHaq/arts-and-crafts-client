import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";

const Main = () => {
  return (
    <div className="bg-[#1D1E23] text-yellow-600">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default Main