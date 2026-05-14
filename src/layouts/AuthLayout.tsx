import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-[#1C1C1C] p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E50914] text-xl font-black text-white shadow-lg shadow-red-950/40">
              FM
            </div>

            <h1 className="text-3xl font-black text-white">FitMaker</h1>

            <p className="mt-2 text-sm text-[#A3A3A3]">
              Gym Management Web Application
            </p>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;