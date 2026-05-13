import { Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <div>
      <h2 className="mb-6 text-center text-2xl font-bold text-slate-900">
        Login
      </h2>

      <form className="space-y-4">
        <TextField
          fullWidth
          label="Email"
          type="email"
          placeholder="admin@gym.com"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          placeholder="admin123"
        />

        <Button fullWidth variant="contained" size="large">
          Login
        </Button>
      </form>

      <p className="mt-4 text-center text-sm text-slate-500">
        Demo account: admin@gym.com / admin123
      </p>
    </div>
  );
};

export default Login;