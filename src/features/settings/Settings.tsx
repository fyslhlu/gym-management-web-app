import { useState } from "react";
import { Button } from "@mui/material";

import { showSuccess } from "@/services/notificationService";
import { themeOptions, type ThemeColorName } from "@/theme/themeConfig";

const Settings = () => {
  const [selectedTheme, setSelectedTheme] =
    useState<ThemeColorName>("red");

  const handleThemeChange = (themeName: ThemeColorName) => {
    setSelectedTheme(themeName);
    showSuccess(`${themeOptions[themeName].name} selected`);
  };

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
                className={`rounded-2xl border-2 bg-white p-5 text-left shadow-sm transition ${
                  isSelected
                    ? "border-emerald-500"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                <div
                  className="mb-4 h-12 rounded-xl"
                  style={{ backgroundColor: theme.secondary }}
                />

                <h3 className="font-semibold text-slate-900">
                  {theme.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Accent color: {theme.secondary}
                </p>

                {isSelected && (
                  <p className="mt-3 text-sm font-medium text-emerald-600">
                    Selected
                  </p>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-6">
          <Button
            variant="contained"
            onClick={() => showSuccess("Settings saved successfully")}
          >
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Settings;