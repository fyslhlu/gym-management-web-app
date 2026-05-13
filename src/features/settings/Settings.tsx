import { Button } from "@mui/material";

const Settings = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Settings</h1>
      <p className="mt-2 text-slate-500">
        Manage theme colors and application settings.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold text-slate-900">
          Theme Controls
        </h2>

        <p className="mt-2 text-slate-500">
          Theme color controls will be added here later.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="contained">Green Theme</Button>
          <Button variant="outlined">Blue Theme</Button>
          <Button variant="outlined" color="secondary">
            Purple Theme
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;