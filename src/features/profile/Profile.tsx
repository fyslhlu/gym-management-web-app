import { useEffect, useState } from "react";

import { darkCard, pageSubtitle, pageTitle } from "@/theme/pageStyles";

type AdminUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const Profile = () => {
  const [adminName, setAdminName] = useState("Faysal Helou");
  const [adminEmail, setAdminEmail] = useState("heloufaysal4@gmail.com");

  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([
    {
      id: 1,
      name: "Faysal Helou",
      email: "heloufaysal4@gmail.com",
      role: "Main Administrator",
    },
  ]);

  useEffect(() => {
    const savedName = localStorage.getItem("adminName");
    const savedEmail = localStorage.getItem("adminEmail");
    const savedAdmins = localStorage.getItem("adminUsers");

    if (savedName) {
      setAdminName(savedName);
    }

    if (savedEmail) {
      setAdminEmail(savedEmail);
    }

    if (savedAdmins) {
      setAdminUsers(JSON.parse(savedAdmins));
    }
  }, []);

  return (
    <div>
      <h1 className={pageTitle}>Profile</h1>

      <p className={pageSubtitle}>
        Admin profile information for the Gym Management Web Application.
      </p>

      <div className={`mt-8 max-w-2xl ${darkCard}`}>
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E50914]/15 text-3xl">
          👤
        </div>

        <h2 className="text-xl font-black text-white">Main Admin Account</h2>

        <div className="mt-4 space-y-3 text-[#D4D4D4]">
          <p>
            <span className="font-bold text-white">Name:</span> {adminName}
          </p>

          <p>
            <span className="font-bold text-white">Email:</span> {adminEmail}
          </p>

          <p>
            <span className="font-bold text-white">Role:</span>{" "}
            Main Administrator
          </p>
        </div>
      </div>

      <div className={`mt-8 ${darkCard}`}>
        <h2 className="text-xl font-black text-white">All Admin Members</h2>

        <p className="mt-2 text-[#A3A3A3]">
          These are all administrators added to the system from the Settings
          page.
        </p>

        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0B0B0B] text-white">
              <tr>
                <th className="p-4">Admin Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
              </tr>
            </thead>

            <tbody>
              {adminUsers.map((admin) => (
                <tr
                  key={admin.id}
                  className="border-b border-white/10 text-[#D4D4D4]"
                >
                  <td className="p-4">{admin.name}</td>
                  <td className="p-4">{admin.email}</td>
                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        admin.role === "Main Administrator"
                          ? "bg-[#E50914]/15 text-[#FF4D00]"
                          : "bg-white/10 text-[#D4D4D4]"
                      }`}
                    >
                      {admin.role}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Profile;