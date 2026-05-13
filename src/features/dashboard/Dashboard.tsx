import ToastButtons from "@/components/toast/ToastButtons";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
      <p className="mt-2 text-slate-500">
        Welcome to the Gym Management Web Application.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Total Members</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">120</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Active Subscriptions</p>
          <h2 className="mt-2 text-3xl font-bold text-emerald-500">87</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Expired Subscriptions</p>
          <h2 className="mt-2 text-3xl font-bold text-red-500">15</h2>
        </div>
      </div>

      <div className="mt-8">
        <ToastButtons />
      </div>
    </div>
  );
};

export default Dashboard;