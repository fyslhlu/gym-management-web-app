import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";

import {
  getRegisteredUsers,
  type AppUser,
} from "@/services/authService";
import {
  showError,
  showSuccess,
  showWarning,
} from "@/services/notificationService";
import { themeOptions, type ThemeColorName } from "@/theme/themeConfig";
import { darkCard, pageSubtitle, pageTitle } from "@/theme/pageStyles";

type AdminUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const Settings = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeColorName>("red");

  const [adminName, setAdminName] = useState("Faysal Helou");
  const [adminEmail, setAdminEmail] = useState("heloufaysal4@gmail.com");

  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");

  const [registeredAccounts, setRegisteredAccounts] = useState<AppUser[]>([]);

  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([
    {
      id: 1,
      name: "Faysal Helou",
      email: "heloufaysal4@gmail.com",
      role: "Main Administrator",
    },
  ]);

  useEffect(() => {
    const savedTheme = localStorage.getItem(
      "selectedTheme"
    ) as ThemeColorName | null;
    const savedName = localStorage.getItem("adminName");
    const savedEmail = localStorage.getItem("adminEmail");
    const savedAdmins = localStorage.getItem("adminUsers");

    if (savedTheme) {
      setSelectedTheme(savedTheme);
    }

    if (savedName) {
      setAdminName(savedName);
    }

    if (savedEmail) {
      setAdminEmail(savedEmail);
    }

    if (savedAdmins) {
      setAdminUsers(JSON.parse(savedAdmins));
    }

    setRegisteredAccounts(getRegisteredUsers());
  }, []);

  const handleThemeChange = (themeName: ThemeColorName) => {
    setSelectedTheme(themeName);
    showSuccess(`${themeOptions[themeName].name} selected`);
  };

  const handleSaveSettings = () => {
    localStorage.setItem("selectedTheme", selectedTheme);
    localStorage.setItem("adminName", adminName);
    localStorage.setItem("adminEmail", adminEmail);

    showSuccess("Settings saved successfully");
  };

  const handleAddAdmin = () => {
    if (!newAdminName || !newAdminEmail) {
      showWarning("Please enter admin name and email");
      return;
    }

    const emailAlreadyExists = adminUsers.some(
      (admin) => admin.email.toLowerCase() === newAdminEmail.toLowerCase()
    );

    if (emailAlreadyExists) {
      showError("This admin email already exists");
      return;
    }

    const newAdmin: AdminUser = {
      id: Date.now(),
      name: newAdminName,
      email: newAdminEmail,
      role: "Administrator",
    };

    const updatedAdmins = [...adminUsers, newAdmin];

    setAdminUsers(updatedAdmins);
    localStorage.setItem("adminUsers", JSON.stringify(updatedAdmins));

    setNewAdminName("");
    setNewAdminEmail("");

    showSuccess("New admin added successfully");
  };

  const handleRemoveAdmin = (adminId: number) => {
    if (adminId === 1) {
      showWarning("Main administrator cannot be removed");
      return;
    }

    const updatedAdmins = adminUsers.filter((admin) => admin.id !== adminId);

    setAdminUsers(updatedAdmins);
    localStorage.setItem("adminUsers", JSON.stringify(updatedAdmins));

    showSuccess("Admin removed successfully");
  };

  const handleRefreshRegisteredAccounts = () => {
    setRegisteredAccounts(getRegisteredUsers());
    showSuccess("Registered accounts refreshed");
  };

  return (
    <div>
      <h1 className={pageTitle}>Settings</h1>

      <p className={pageSubtitle}>
        Manage theme colors, admin profile, registered accounts, and application
        settings.
      </p>

      <div className={`mt-8 ${darkCard}`}>
        <h2 className="text-xl font-black text-white">Theme Controls</h2>

        <p className="mt-2 text-[#A3A3A3]">
          Choose a theme color for the Gym Management Web Application.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Object.entries(themeOptions).map(([key, theme]) => {
            const themeKey = key as ThemeColorName;
            const isSelected = selectedTheme === themeKey;

            return (
              <button
                key={themeKey}
                type="button"
                onClick={() => handleThemeChange(themeKey)}
                className={`rounded-3xl border-2 bg-[#111111] p-5 text-left shadow-xl transition ${
                  isSelected
                    ? "border-[#E50914]"
                    : "border-white/10 hover:border-[#E50914]/50"
                }`}
              >
                <div
                  className="mb-4 h-12 rounded-2xl"
                  style={{ backgroundColor: theme.secondary }}
                />

                <h3 className="font-black text-white">{theme.name}</h3>

                <p className="mt-1 text-sm text-[#A3A3A3]">
                  Accent color: {theme.secondary}
                </p>

                {isSelected && (
                  <p className="mt-3 text-sm font-bold text-[#FF4D00]">
                    Selected
                  </p>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-6">
          <Button variant="contained" onClick={handleSaveSettings}>
            Save Settings
          </Button>
        </div>
      </div>

      <div className={`mt-8 ${darkCard}`}>
        <h2 className="text-xl font-black text-white">
          Main Admin Information
        </h2>

        <p className="mt-2 text-[#A3A3A3]">
          Update the admin information displayed in the profile page.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <TextField
            label="Admin Name"
            value={adminName}
            onChange={(event) => setAdminName(event.target.value)}
            fullWidth
          />

          <TextField
            label="Admin Email"
            value={adminEmail}
            onChange={(event) => setAdminEmail(event.target.value)}
            fullWidth
          />
        </div>

        <div className="mt-6">
          <Button variant="contained" onClick={handleSaveSettings}>
            Save Admin Info
          </Button>
        </div>
      </div>

      <div className={`mt-8 ${darkCard}`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-black text-white">
              Registered Accounts
            </h2>

            <p className="mt-2 text-[#A3A3A3]">
              All accounts created from the signup page are shown here.
            </p>
          </div>

          <Button variant="outlined" onClick={handleRefreshRegisteredAccounts}>
            Refresh Accounts
          </Button>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0B0B0B] text-white">
              <tr>
                <th className="p-4">Full Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Password</th>
                <th className="p-4">Role</th>
              </tr>
            </thead>

            <tbody>
              {registeredAccounts.length === 0 ? (
                <tr className="border-b border-white/10 text-[#D4D4D4]">
                  <td className="p-4 text-[#A3A3A3]" colSpan={4}>
                    No registered accounts found.
                  </td>
                </tr>
              ) : (
                registeredAccounts.map((account) => (
                  <tr
                    key={account.id}
                    className="border-b border-white/10 text-[#D4D4D4]"
                  >
                    <td className="p-4">{account.fullName}</td>
                    <td className="p-4">{account.email}</td>
                    <td className="p-4">{account.password}</td>
                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          account.role === "admin"
                            ? "bg-[#E50914]/15 text-[#FF4D00]"
                            : "bg-white/10 text-[#D4D4D4]"
                        }`}
                      >
                        {account.role}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className={`mt-8 ${darkCard}`}>
        <h2 className="text-xl font-black text-white">Add Another Admin</h2>

        <p className="mt-2 text-[#A3A3A3]">
          Add another administrator who can help manage the gym system.
        </p>

        <form
          className="mt-6"
          onSubmit={(event) => {
            event.preventDefault();
            handleAddAdmin();
          }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="New Admin Name"
              value={newAdminName}
              onChange={(event) => setNewAdminName(event.target.value)}
              fullWidth
            />

            <TextField
              label="New Admin Email"
              value={newAdminEmail}
              onChange={(event) => setNewAdminEmail(event.target.value)}
              fullWidth
            />
          </div>

          <div className="mt-6">
            <Button variant="contained" type="submit">
              Add Admin
            </Button>
          </div>
        </form>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#0B0B0B] text-white">
              <tr>
                <th className="p-4">Admin Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Action</th>
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
                  <td className="p-4">{admin.role}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleRemoveAdmin(admin.id)}
                      className="rounded-full border border-red-500/40 px-3 py-1 text-xs font-bold text-red-400 transition hover:bg-red-500/10"
                    >
                      Remove
                    </button>
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

export default Settings;