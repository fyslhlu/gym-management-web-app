import { Button } from "@mui/material";

import {
  showError,
  showSuccess,
  showWarning,
} from "@/services/notificationService";

const ToastButtons = () => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="text-xl font-semibold text-slate-900">
        Toast Notification Test
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Click these buttons to test success, warning, and error notifications.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          variant="contained"
          color="success"
          onClick={() => showSuccess("Member added successfully")}
        >
          Success Toast
        </Button>

        <Button
          variant="contained"
          color="warning"
          onClick={() => showWarning("Subscription expires soon")}
        >
          Warning Toast
        </Button>

        <Button
          variant="contained"
          color="error"
          onClick={() => showError("Payment failed")}
        >
          Error Toast
        </Button>
      </div>
    </div>
  );
};

export default ToastButtons;