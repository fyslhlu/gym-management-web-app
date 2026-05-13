import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex">
        <aside className="min-h-screen w-64 bg-slate-900 p-6 text-white">
          <h2 className="mb-8 text-2xl font-bold">Gym System</h2>

          <nav className="space-y-3 text-sm">
            <p className="rounded-lg bg-emerald-500 px-4 py-2 font-medium">
              Dashboard
            </p>
            <p className="rounded-lg px-4 py-2 text-slate-300">Profile</p>
            <p className="rounded-lg px-4 py-2 text-slate-300">Settings</p>
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