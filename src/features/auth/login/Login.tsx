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

import { loginUser } from "@/services/authService";
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

  const handleLoginClick = () => {
    if (!email || !password) {
      showWarning("Please enter both email and password");
      return;
    }

    const result = loginUser(email, password);

    if (!result.success || !result.user) {
      showError(result.message);
      return;
    }

    setIsDialogOpen(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLoginClick();
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
      <h2 className="mb-6 text-center text-2xl font-black text-white">
        Login
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          size="large"
          type="submit"
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
      </form>

      <div className="mt-4 space-y-3 text-center text-sm text-[#A3A3A3]">
        <p>Default admin account:</p>
        <p>heloufaysal4@gmail.com / admin123</p>

        <button
          type="button"
          onClick={() => navigate("/signup")}
          className="font-bold text-[#FF4D00] transition hover:text-white"
        >
          Create a new account
        </button>
      </div>

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