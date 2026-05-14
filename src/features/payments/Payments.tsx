import {
  darkStatCard,
  darkTableHead,
  darkTableRow,
  darkTableWrapper,
  pageSubtitle,
  pageTitle,
} from "@/theme/pageStyles";

const Payments = () => {
  const payments = [
    {
      id: 1,
      member: "Ali Ahmad",
      amount: "$30",
      method: "Cash",
      date: "2026-05-01",
      status: "Paid",
    },
    {
      id: 2,
      member: "Sara Khaled",
      amount: "$300",
      method: "Card",
      date: "2026-04-15",
      status: "Paid",
    },
    {
      id: 3,
      member: "Omar Hassan",
      amount: "$20",
      method: "Cash",
      date: "2026-03-20",
      status: "Unpaid",
    },
  ];

  return (
    <div>
      <h1 className={pageTitle}>Payments</h1>

      <p className={pageSubtitle}>
        Track gym member payments and billing information.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className={darkStatCard}>
          <p className="text-sm text-[#A3A3A3]">Total Revenue</p>
          <h2 className="mt-2 text-3xl font-black text-[#E50914]">$350</h2>
        </div>

        <div className={darkStatCard}>
          <p className="text-sm text-[#A3A3A3]">Paid Payments</p>
          <h2 className="mt-2 text-3xl font-black text-white">2</h2>
        </div>

        <div className={darkStatCard}>
          <p className="text-sm text-[#A3A3A3]">Unpaid Payments</p>
          <h2 className="mt-2 text-3xl font-black text-red-400">1</h2>
        </div>
      </div>

      <div className={darkTableWrapper}>
        <table className="w-full text-left text-sm">
          <thead className={darkTableHead}>
            <tr>
              <th className="p-4">Member</th>
              <th className="p-4">Amount</th>
              <th className="p-4">Method</th>
              <th className="p-4">Date</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className={darkTableRow}>
                <td className="p-4">{payment.member}</td>
                <td className="p-4">{payment.amount}</td>
                <td className="p-4">{payment.method}</td>
                <td className="p-4">{payment.date}</td>
                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      payment.status === "Paid"
                        ? "bg-emerald-500/15 text-emerald-400"
                        : "bg-red-500/15 text-red-400"
                    }`}
                  >
                    {payment.status}
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

export default Payments;