import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import {
  showError,
  showSuccess,
  showWarning,
} from "@/services/notificationService";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const correctEmail = "admin@gym.com";
  const correctPassword = "admin123";

  const handleLoginClick = () => {
    if (!email || !password) {
      showWarning("Please enter both email and password");
      return;
    }

    if (email !== correctEmail || password !== correctPassword) {
      showError("Invalid email or password");
      return;
    }

    setIsDialogOpen(true);
  };

  const handleConfirmLogin = () => {
    setIsDialogOpen(false);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      showSuccess("Login successful");
      navigate("/dashboard");
    }, 3000);
  };

  const handleCancelLogin = () => {
    setIsDialogOpen(false);
    showWarning("Login cancelled");
  };

  return (
    <div>
      <h2 className="mb-6 text-center text-2xl font-bold text-slate-900">
        Login
      </h2>

      <div className="space-y-4">
        <TextField
          fullWidth
          label="Email"
          type="email"
          placeholder="admin@gym.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          placeholder="admin123"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          size="large"
          onClick={handleLoginClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <CircularProgress size={20} color="inherit" />
              Logging in...
            </div>
          ) : (
            "Login"
          )}
        </Button>
      </div>

      <p className="mt-4 text-center text-sm text-slate-500">
        Demo account: admin@gym.com / admin123
      </p>

      <Dialog open={isDialogOpen} onClose={handleCancelLogin}>
        <DialogTitle>Confirm Login</DialogTitle>

        <DialogContent>
          Are you sure you want to login to the Gym Management System?
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCancelLogin} color="inherit">
            No
          </Button>

          <Button onClick={handleConfirmLogin} variant="contained">
            Yes, Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;