import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import Login from "@/features/auth/login/Login";
import Signup from "@/features/auth/signup/Signup";
import Dashboard from "@/features/dashboard/Dashboard";
import Profile from "@/features/profile/Profile";
import Settings from "@/features/settings/Settings";
import Members from "@/features/members/Members";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/members" element={<Members />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;