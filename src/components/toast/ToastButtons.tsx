import { Button } from "@mui/material";

import {
  showError,
  showSuccess,
  showWarning,
} from "@/services/notificationService";
import { darkCard } from "@/theme/pageStyles";

const ToastButtons = () => {
  return (
    <div className={darkCard}>
      <h2 className="text-xl font-black text-white">
        Toast Notification Test
      </h2>

      <p className="mt-2 text-sm text-[#A3A3A3]">
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