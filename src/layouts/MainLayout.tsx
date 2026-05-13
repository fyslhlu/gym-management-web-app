import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Members", path: "/members" },
    { label: "Trainers", path: "/trainers" },
    { label: "Plans", path: "/plans" },
    { label: "Subscriptions", path: "/subscriptions" },
    { label: "Payments", path: "/payments" },
    { label: "Workouts", path: "/workouts" },
    { label: "Attendance", path: "/attendance" },
    { label: "Reports", path: "/reports" },
    { label: "Profile", path: "/profile" },
    { label: "Settings", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex">
        <aside className="min-h-screen w-64 bg-slate-900 p-6 text-white">
          <h2 className="mb-8 text-2xl font-bold">Gym System</h2>

          <nav className="space-y-2 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block rounded-lg px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
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