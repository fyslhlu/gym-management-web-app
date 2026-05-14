import { NavLink, Outlet } from "react-router-dom";

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
    <div className="min-h-screen bg-[#111111] text-white">
      <div className="flex">
        <aside className="min-h-screen w-72 border-r border-white/10 bg-[#0B0B0B] p-6">
          <div className="mb-10">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E50914] font-black text-white shadow-lg shadow-red-900/40">
                FM
              </div>

              <div>
                <h2 className="text-xl font-black tracking-wide">
                  FitMaker
                </h2>
                <p className="text-xs text-[#A3A3A3]">
                  Gym Management
                </p>
              </div>
            </div>
          </div>

          <nav className="space-y-2 text-sm">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 font-medium transition ${
                    isActive
                      ? "bg-[#E50914] text-white shadow-lg shadow-red-950/40"
                      : "text-[#A3A3A3] hover:bg-white/5 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="min-h-screen flex-1 p-8">
          <div className="mb-8 rounded-3xl border border-white/10 bg-[#1C1C1C]/80 p-5 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-[#A3A3A3]">
                  Welcome back, Admin
                </p>
                <h1 className="text-2xl font-black">
                  Achieve Your Fitness Goals With FitMaker
                </h1>
              </div>

              <div className="rounded-full border border-[#E50914]/40 bg-[#E50914]/10 px-4 py-2 text-sm font-semibold text-[#FF4D00]">
                Premium Dashboard
              </div>
            </div>
          </div>

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;