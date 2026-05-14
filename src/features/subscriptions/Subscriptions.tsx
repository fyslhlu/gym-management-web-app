import { useEffect, useState } from "react";

import {
  darkTableHead,
  darkTableRow,
  darkTableWrapper,
  pageSubtitle,
  pageTitle,
} from "@/theme/pageStyles";
import {
  getCustomerSubscriptions,
  type CustomerSubscription,
} from "@/services/subscriptionService";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState<CustomerSubscription[]>([]);

  useEffect(() => {
    const savedSubscriptions = getCustomerSubscriptions();
    setSubscriptions(savedSubscriptions);
  }, []);

  return (
    <div>
      <h1 className={pageTitle}>Subscriptions</h1>

      <p className={pageSubtitle}>
        Track active membership plans registered by customers.
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
            </tr>
          </thead>

          <tbody>
            {subscriptions.length === 0 ? (
              <tr className={darkTableRow}>
                <td className="p-4 text-[#A3A3A3]" colSpan={7}>
                  No customer subscriptions activated yet.
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
                    <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-400">
                      {subscription.status}
                    </span>
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