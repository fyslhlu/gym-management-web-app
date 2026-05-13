import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex">
        <aside className="min-h-screen w-64 bg-slate-900 p-6 text-white">
          <h2 className="mb-8 text-2xl font-bold">Gym System</h2>

          <nav className="space-y-3 text-sm">
            <Link
              to="/dashboard"
              className="block rounded-lg bg-emerald-500 px-4 py-2 font-medium"
            >
              Dashboard
            </Link>

            <Link
              to="/members"
              className="block rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800"
            >
              Members
            </Link>

            <Link
              to="/profile"
              className="block rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800"
            >
              Profile
            </Link>

            <Link
              to="/settings"
              className="block rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800"
            >
              Settings
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;