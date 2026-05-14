import { NavLink, Outlet, useNavigate } from "react-router-dom";

import { getCurrentUser, logoutUser } from "@/services/authService";
import { showSuccess } from "@/services/notificationService";

const MainLayout = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const adminNavItems = [
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

  const customerNavItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Plans", path: "/plans" },
    { label: "Trainers", path: "/trainers" },
    { label: "Workouts", path: "/workouts" },
    { label: "Attendance", path: "/attendance" },
    { label: "Profile", path: "/profile" },
  ];

  const navItems =
    currentUser?.role === "customer" ? customerNavItems : adminNavItems;

  const handleLogout = () => {
    logoutUser();
    showSuccess("Logged out successfully");
    navigate("/login");
  };

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
                <h2 className="text-xl font-black tracking-wide">FitMaker</h2>

                <p className="text-xs text-[#A3A3A3]">
                  {currentUser?.role === "customer"
                    ? "Customer Portal"
                    : "Admin Dashboard"}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-3xl border border-white/10 bg-[#1C1C1C] p-4 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-[#E50914]/15 text-2xl">
                {currentUser?.profilePicture ? (
                  <img
                    src={currentUser.profilePicture}
                    alt="User profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  "👤"
                )}
              </div>

              <div className="min-w-0">
                <p className="text-xs text-[#A3A3A3]">Logged in as</p>

                <p className="truncate font-bold text-white">
                  {currentUser?.fullName || "Guest User"}
                </p>

                <p className="mt-1 text-xs font-semibold uppercase text-[#FF4D00]">
                  {currentUser?.role || "guest"}
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

            <button
              onClick={handleLogout}
              className="mt-6 block w-full rounded-xl border border-red-500/30 px-4 py-3 text-left font-medium text-red-400 transition hover:bg-red-500/10"
            >
              Logout
            </button>
          </nav>
        </aside>

        <main className="min-h-screen flex-1 p-8">
          <div className="mb-8 rounded-3xl border border-white/10 bg-[#1C1C1C]/80 p-5 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-[#A3A3A3]">
                  Welcome back, {currentUser?.fullName || "Admin"}
                </p>

                <h1 className="text-2xl font-black">
                  Achieve Your Fitness Goals With FitMaker
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-[#E50914]/40 bg-[#111111] text-lg md:flex">
                  {currentUser?.profilePicture ? (
                    <img
                      src={currentUser.profilePicture}
                      alt="User profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    "👤"
                  )}
                </div>

                <div className="rounded-full border border-[#E50914]/40 bg-[#E50914]/10 px-4 py-2 text-sm font-semibold text-[#FF4D00]">
                  {currentUser?.role === "customer"
                    ? "Customer Mode"
                    : "Admin Mode"}
                </div>
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