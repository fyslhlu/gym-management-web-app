import {
  darkTableHead,
  darkTableRow,
  darkTableWrapper,
  pageSubtitle,
  pageTitle,
} from "@/theme/pageStyles";

const Subscriptions = () => {
  const subscriptions = [
    {
      id: 1,
      member: "Ali Ahmad",
      plan: "Monthly Plan",
      startDate: "2026-05-01",
      endDate: "2026-05-31",
      status: "Active",
    },
    {
      id: 2,
      member: "Sara Khaled",
      plan: "Yearly Plan",
      startDate: "2026-04-15",
      endDate: "2027-04-15",
      status: "Active",
    },
    {
      id: 3,
      member: "Omar Hassan",
      plan: "Student Plan",
      startDate: "2026-03-20",
      endDate: "2026-04-20",
      status: "Expired",
    },
  ];

  return (
    <div>
      <h1 className={pageTitle}>Subscriptions</h1>

      <p className={pageSubtitle}>
        Track active and expired gym member subscriptions.
      </p>

      <div className={darkTableWrapper}>
        <table className="w-full text-left text-sm">
          <thead className={darkTableHead}>
            <tr>
              <th className="p-4">Member</th>
              <th className="p-4">Plan</th>
              <th className="p-4">Start Date</th>
              <th className="p-4">End Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {subscriptions.map((subscription) => (
              <tr key={subscription.id} className={darkTableRow}>
                <td className="p-4">{subscription.member}</td>
                <td className="p-4">{subscription.plan}</td>
                <td className="p-4">{subscription.startDate}</td>
                <td className="p-4">{subscription.endDate}</td>
                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      subscription.status === "Active"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-red-500/15 text-red-400"
                    }`}
                  >
                    {subscription.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Subscriptions;