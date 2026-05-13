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
      <h1 className="text-3xl font-bold text-slate-900">Payments</h1>

      <p className="mt-2 text-slate-500">
        Track gym member payments and billing information.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Total Revenue</p>
          <h2 className="mt-2 text-3xl font-bold text-emerald-500">$350</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Paid Payments</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">2</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Unpaid Payments</p>
          <h2 className="mt-2 text-3xl font-bold text-red-500">1</h2>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900 text-white">
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
              <tr key={payment.id} className="border-b">
                <td className="p-4">{payment.member}</td>
                <td className="p-4">{payment.amount}</td>
                <td className="p-4">{payment.method}</td>
                <td className="p-4">{payment.date}</td>
                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      payment.status === "Paid"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-red-100 text-red-700"
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