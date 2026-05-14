import { useEffect, useState } from "react";

import {
  getCustomerSubscriptions,
  updateSubscriptionStatus,
  type CustomerSubscription,
  type SubscriptionStatus,
} from "@/services/subscriptionService";
import { showSuccess } from "@/services/notificationService";
import {
  darkTableHead,
  darkTableRow,
  darkTableWrapper,
  pageSubtitle,
  pageTitle,
} from "@/theme/pageStyles";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<CustomerSubscription[]>([]);

  useEffect(() => {
    setSubscriptions(getCustomerSubscriptions());
  }, []);

  const handleStatusChange = (
    subscriptionId: number,
    status: SubscriptionStatus
  ) => {
    const updatedSubscriptions = updateSubscriptionStatus(
      subscriptionId,
      status
    );

    setSubscriptions(updatedSubscriptions);
    showSuccess(`Subscription ${status.toLowerCase()} successfully`);
  };

  const getStatusClass = (status: SubscriptionStatus) => {
    if (status === "Approved") {
      return "bg-emerald-500/15 text-emerald-400";
    }

    if (status === "Rejected") {
      return "bg-red-500/15 text-red-400";
    }

    return "bg-yellow-500/15 text-yellow-400";
  };

  return (
    <div>
      <h1 className={pageTitle}>Subscriptions</h1>

      <p className={pageSubtitle}>
        Track customer plan requests and approve or reject membership
        subscriptions.
      </p>

      <div className={darkTableWrapper}>
        <table className="w-full text-left text-sm">
          <thead className={darkTableHead}>
            <tr>
              <th className="p-4">Customer</th>
              <th className="p-4">Email</th>
              <th className="p-4">Plan</th>
              <th className="p-4">Price</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">End Date</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {subscriptions.length === 0 ? (
              <tr className={darkTableRow}>
                <td className="p-4 text-[#A3A3A3]" colSpan={8}>
                  No customer subscriptions requested yet.
                </td>
              </tr>
            ) : (
              subscriptions.map((subscription) => (
                <tr key={subscription.id} className={darkTableRow}>
                  <td className="p-4">{subscription.customerName}</td>
                  <td className="p-4">{subscription.customerEmail}</td>
                  <td className="p-4">{subscription.planName}</td>
                  <td className="p-4">{subscription.price}</td>
                  <td className="p-4">{subscription.startDate}</td>
                  <td className="p-4">{subscription.endDate}</td>
                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClass(
                        subscription.status
                      )}`}
                    >
                      {subscription.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {subscription.status === "Pending" ? (
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleStatusChange(subscription.id, "Approved")
                          }
                          className="rounded-full border border-emerald-500/40 px-3 py-1 text-xs font-bold text-emerald-400 transition hover:bg-emerald-500/10"
                        >
                          Approve
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleStatusChange(subscription.id, "Rejected")
                          }
                          className="rounded-full border border-red-500/40 px-3 py-1 text-xs font-bold text-red-400 transition hover:bg-red-500/10"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-[#A3A3A3]">
                        No action
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriptions;