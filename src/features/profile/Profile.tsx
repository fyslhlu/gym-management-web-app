const Profile = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Profile</h1>
      <p className="mt-2 text-slate-500">
        Admin profile information for the Gym Management Web Application.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold text-slate-900">Admin Account</h2>

        <div className="mt-4 space-y-3 text-slate-600">
          <p>
            <span className="font-medium text-slate-900">Name:</span> Gym Admin
          </p>
          <p>
            <span className="font-medium text-slate-900">Email:</span>{" "}
            admin@gym.com
          </p>
          <p>
            <span className="font-medium text-slate-900">Role:</span>{" "}
            Administrator
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;