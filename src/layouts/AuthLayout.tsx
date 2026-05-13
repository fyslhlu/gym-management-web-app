import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Gym Management
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Login or create an account to continue
          </p>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;