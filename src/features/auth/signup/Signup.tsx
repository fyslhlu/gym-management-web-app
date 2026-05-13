import { Button, TextField } from "@mui/material";

const Signup = () => {
  return (
    <div>
      <h2 className="mb-6 text-center text-2xl font-bold text-slate-900">
        Create Account
      </h2>

      <form className="space-y-4">
        <TextField
          fullWidth
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
        />

        <TextField
          fullWidth
          label="Email"
          type="email"
          placeholder="example@email.com"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          placeholder="Create a password"
        />

        <Button fullWidth variant="contained" size="large">
          Sign Up
        </Button>
      </form>

      <p className="mt-4 text-center text-sm text-slate-500">
        Already have an account? <a href="/login" className="text-emerald-500 hover:underline">
          Go to login
        </a>
      </p>
    </div>
  );
};

export default Signup;