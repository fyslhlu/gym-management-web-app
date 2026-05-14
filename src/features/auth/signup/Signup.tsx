import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { registerUser, type UserRole } from "@/services/authService";
import {
  showError,
  showSuccess,
  showWarning,
} from "@/services/notificationService";

const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState<UserRole>("customer");

  const handleSignup = () => {
    if (!fullName || !email || !password) {
      showWarning("Please fill all signup fields");
      return;
    }

    const result = registerUser({
      id: Date.now(),
      fullName,
      email,
      password,
      role,
    });

    if (!result.success) {
      showError(result.message);
      return;
    }

    showSuccess(`${role === "admin" ? "Admin" : "Customer"} account created`);

    setFullName("");
    setEmail("");
    setPassword("");
    setRole("customer");

    navigate("/login");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSignup();
  };

  return (
    <div>
      <h2 className="mb-6 text-center text-2xl font-black text-white">
        Create Account
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />

        <TextField
          fullWidth
          label="Email"
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <FormControl fullWidth>
          <InputLabel>Register As</InputLabel>

          <Select
            label="Register As"
            value={role}
            onChange={(event) => setRole(event.target.value as UserRole)}
          >
            <MenuItem value="customer">Customer</MenuItem>
            <MenuItem value="admin">Administrator</MenuItem>
          </Select>
        </FormControl>

        <Button fullWidth variant="contained" size="large" type="submit">
          Create Account
        </Button>
      </form>

      <div className="mt-4 text-center text-sm text-[#A3A3A3]">
        <span>Already have an account? </span>

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="font-bold text-[#FF4D00] transition hover:text-white"
        >
          Go to login
        </button>
      </div>
    </div>
  );
};

export default Signup;