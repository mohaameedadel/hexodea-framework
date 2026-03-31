import { Link, Outlet } from "react-router";
import Navbar from "~/components/navbar";

export default function AppDashboardLayout() {
  return (
    <div className="flex">
      <div className="h-full min-h-screen p-4 w-16 md:w-60 bg-white border-e border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <p className="bg-main text-white w-8 h-8 flex justify-center items-center text-xl font-normal rounded-xl">
            H
          </p>
        </div>

        <Link to="/app/applications" className="flex items-center gap-2 mt-6">
          <p className="text-muted font-normal text-sm">Applications</p>
        </Link>
        <Link to="/app/test" className="flex items-center gap-2 mt-6">
          <p className="text-muted font-normal text-sm">Test</p>
        </Link>
      </div>
      <div className="w-full">
        <Navbar />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
