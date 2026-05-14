import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "@/layouts/AuthLayout";
import MainLayout from "@/layouts/MainLayout";

import Login from "@/features/auth/login/Login";
import Signup from "@/features/auth/signup/Signup";
import Dashboard from "@/features/dashboard/Dashboard";
import Profile from "@/features/profile/Profile";
import Settings from "@/features/settings/Settings";
import Members from "@/features/members/Members";
import Trainers from "@/features/trainers/Trainers";
import Plans from "@/features/plans/Plans";
import Subscriptions from "@/features/subscriptions/Subscriptions";
import Payments from "@/features/payments/Payments";
import Workouts from "@/features/workouts/Workouts";
import Attendance from "@/features/attendance/Attendance";
import Reports from "@/features/reports/Reports";
import MyActivity from "@/features/myActivity/MyActivity";

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
        <Route path="/members" element={<Members />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/my-activity" element={<MyActivity />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;